import { Appwrite } from "$lib/Appwrite/Appwrite";
import { Environment } from "$lib/Env/Environment";
import type { GenericListOptions } from "$lib/Models/Common/ListOptions.Common.Model";
import type { Product } from "$lib/Models/Entities/Products.Entity.Model";
import type {
  CreateProductsRequest,
  ProductsRequest,
} from "$lib/Models/Requests/CreateProducts.Request.Model";
import type { IProductsRepository } from "$lib/Repositories/Interface/I.Products.Repository";
import { ID, Query } from "appwrite";

export class ProductsRepository implements IProductsRepository {
  async createProduct(product: CreateProductsRequest): Promise<void> {
    try {
      const productsResponse: ProductsRequest = {
        title: product.title,
        appLinkGoogleImage: product.appLinkImage?.google.url as string,
        appLinkAppleImage: product.appLinkImage?.apple.url as string,
        productAttributeIds: product.productAttributeIds,
      };

      await Appwrite.databases.createDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_products,
        ID.unique(),
        productsResponse
      );
    } catch (error) {
      throw error;
    }
  }
  async getProducts(
    options?: GenericListOptions
  ): Promise<AppwriteResponse<Product>> {
    try {
      const query = this.filterQuery([], options);
      const { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_products,
        query
      )) as AppwriteResponse<Product>;
      return { documents, total };
    } catch (error) {
      throw error;
    }
  }
  async getProductById(id: string): Promise<Product> {
    try {
      const product = (await Appwrite.databases.getDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_products,
        id,
        [
            Query.isNull("deletedAt"),
        ]
      )) as Product;
      return product;
    } catch (error) {
      throw error;
    }
  }
  async updateProduct(request: CreateProductsRequest): Promise<Product> {
    try {
      const productRequest: ProductsRequest = {
        title: request.title,
        appLinkGoogleImage: request.appLinkImage?.google.url as string,
        appLinkAppleImage: request.appLinkImage?.apple.url as string,
        productAttributeIds: request.productAttributeIds,
      };
      const result = await Appwrite.databases.updateDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_products,
        request.id as string,
        productRequest
      );

      return result as Product;
    } catch (error) {
      throw error;
    }
  }
  async deleteProduct(id: string): Promise<void> {
    try {
      await Appwrite.databases.updateDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_products,
        id,
        {
          deletedAt: Date.now(),
        }
      );
    } catch (error) {
      throw error;
    }
  }

  private filterQuery(query: string[], options?: GenericListOptions): string[] {
    query = [
      Query.orderDesc(options?.sortField || "$createdAt"),
      Query.limit(options?.limit || 1),
    ];
    return query;
  }
}
