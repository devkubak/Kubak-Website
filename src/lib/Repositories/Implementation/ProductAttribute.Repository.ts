import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { ProductAttribute } from "$lib/Models/Entities/ProductAttribute.Entity.Model";
import type { IProductAttributesRepository } from "$lib/Repositories/Interface/I.ProductAttributes.Repository";
import { Query } from "appwrite";

export class ProductAttributesRepository
  implements IProductAttributesRepository
{
  async getProductAttributes(): Promise<AppwriteResponse<ProductAttribute>> {
    const query = this.filterQuery([]);
    const { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_product_attributes,
      query,
    )) as AppwriteResponse<ProductAttribute>;
    return { documents, total };
  }
  async getProductAttribute(id: string): Promise<ProductAttribute> {
    const productAttribute = (await databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_product_attributes,
      id,
      [Query.isNull("deletedAt")],
    )) as ProductAttribute;
    return productAttribute;
  }

  private filterQuery(query: string[]): string[] {
    query = [Query.orderAsc("index_order"), Query.limit(3)];
    return query;
  }
}
