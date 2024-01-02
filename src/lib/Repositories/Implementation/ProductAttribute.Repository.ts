import { Appwrite } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { ProductAttribute } from "$lib/Models/Entities/ProductAttribute.Entity.Model";

import type { IProductAttributesRepository } from "$lib/Repositories/Interface/I.ProductAttributes.Repository";
import { ID, Query } from "appwrite";

export class ProductAttributesRepository
  implements IProductAttributesRepository
{
  
  async getProductAttributes(
  ): Promise<AppwriteResponse<ProductAttribute>> {
    try {
      const query = this.filterQuery([]);
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
  
  private filterQuery(query: string[]): string[] {
    query = [
      Query.orderAsc( "index_order"),
      Query.limit(3),
    ];
    return query;
  }
}
