import { Appwrite } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { Product } from "$lib/Models/Entities/Product.Entity.Model";

import type { IProductsRepository } from "$lib/Repositories/Interface/I.Products.Repository";
import { Query } from "appwrite";

export class ProductsRepository implements IProductsRepository {
  async getProducts(): Promise<AppwriteResponse<Product>> {
    try {
      const { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_products,
        [Query.isNull("deletedAt")]
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
        [Query.isNull("deletedAt")]
      )) as Product;
      return product;
    } catch (error) {
      throw error;
    }
  }
}
