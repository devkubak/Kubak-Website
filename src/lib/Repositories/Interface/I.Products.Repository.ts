import type { Product } from "$lib/Models/Entities/Product.Entity.Model";

export interface IProductsRepository {
  getProducts(): Promise<AppwriteResponse<Product>>;
  getProductById(id: string): Promise<Product>;
}
