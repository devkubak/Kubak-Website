import type { ProductAttributeDto } from "$lib/Models/DTO/ProductAttribute.DTO.Model";
import type { Language } from "$lib/Models/Common/Language.Common.Model";

export interface ProductDto {
    id: string;
    title: Language;
    appLinksImage:{
        google: string;
        apple: string;
    },
    productAttribute: ProductAttributeDto[];
}