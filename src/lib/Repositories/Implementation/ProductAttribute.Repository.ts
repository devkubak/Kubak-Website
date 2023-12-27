import { Appwrite } from "$lib/Appwrite/Appwrite";
import { Environment } from "$lib/Env/Environment";
import type { GenericListOptions } from "$lib/Models/Common/ListOptions.Common.Model";
import type { ProductAttribute } from "$lib/Models/Entities/ProductAttribute.Entity.Model";
import type {
  CreateProductAttributeRequest,
  ProductAttributeRequest,
} from "$lib/Models/Requests/CreateProductAttribute.Request.Model";
import type { IProductAttributesRepository } from "$lib/Repositories/Interface/I.ProductAttributes.Repository";
import { ID, Query } from "appwrite";

export class ProductAttributesRepository
  implements IProductAttributesRepository
{
  async createProductAttribute(
    productAttribute: CreateProductAttributeRequest
  ): Promise<void> {
    try {
      const productAttributeRequest: ProductAttributeRequest = {
        title: productAttribute.title,
        description: productAttribute.description,
        image: productAttribute.image.url as string,
        index_order: productAttribute.index_order,
        image_position: productAttribute.image_position,
      };
      await Appwrite.databases.createDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_product_attributes,
        ID.unique(),
        productAttributeRequest
      );
    } catch (error) {
      throw error;
    }
  }
  async getProductAttributes(
    options?: GenericListOptions
  ): Promise<AppwriteResponse<ProductAttribute>> {
    try {
      const query = this.filterQuery([], options);
      const { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_product_attributes,
        query
      )) as AppwriteResponse<ProductAttribute>;
      return { documents, total };
    } catch (error) {
      throw error;
    }
  }
  async getProductAttribute(id: string): Promise<ProductAttribute> {
    try {
      const productAttribute = (await Appwrite.databases.getDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_product_attributes,
        id,
        [Query.isNull("deletedAt")]
      )) as ProductAttribute;
      return productAttribute;
    } catch (error) {
      throw error;
    }
  }
  async updateProductAttribute(
    productAttribute: CreateProductAttributeRequest
  ): Promise<ProductAttribute> {
    try {
      const productAttributeRequest: ProductAttributeRequest = {
        title: productAttribute.title,
        description: productAttribute.description,
        image: productAttribute.image.url as string,
        index_order: productAttribute.index_order,
        image_position: productAttribute.image_position,
      };
      const updatedProductAttribute = (await Appwrite.databases.updateDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_product_attributes,
        productAttribute.id as string,
        productAttributeRequest
      )) as ProductAttribute;

      return updatedProductAttribute;
    } catch (error) {
      throw error;
    }
  }
  async deleteProductAttribute(id: string): Promise<void> {
    try {
      await Appwrite.databases.updateDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_product_attributes,
        id,
        {
          deletedAt: new Date(),
        }
      );
    } catch (error) {
      throw error;
    }
  }

  private filterQuery(query: string[], options?: GenericListOptions): string[] {
    query = [
      Query.orderDesc(options?.sortField || "$createdAt"),
      Query.limit(options?.limit || 6),
    ];
    if (options?.search) {
      query.push(Query.startsWith("title", options?.search));
    }
    if (options?.from && options?.to) {
      query.push(Query.between("$createdAt", options?.from, options?.to));
    }
    return query;
  }
}
