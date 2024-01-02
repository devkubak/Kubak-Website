import type { ProductAttribute } from "$lib/Models/Entities/ProductAttribute.Entity.Model";
import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";
import type { ProductLanguage } from "./Language/Product.Language.Entity.Model";

export interface Product extends Database {
    appLinkGoogleImage: string,
    appLinkAppleImage: string,
    productAttributes: ProductAttribute[],
    deletedAt: Date | null,
    productLanguages: ProductLanguage
}