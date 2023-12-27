import type { ProductAttribute } from "$lib/Models/Entities/ProductAttribute.Entity.Model";

export interface IProductAttributesRepository {
  getProductAttributes(): Promise<AppwriteResponse<ProductAttribute>>;
  getProductAttribute(id: string): Promise<ProductAttribute>;
}
