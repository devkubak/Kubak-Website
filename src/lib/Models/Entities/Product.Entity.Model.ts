import type { ProductAttribute } from "$lib/Models/Entities/ProductAttribute.Entity.Model";
import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Product extends Database {
    appLinkGoogleImage: string,
    appLinkAppleImage: string,
    productAttributes: ProductAttribute[],
    deletedAt: Date | null
}