import type { ProductAttributeDto } from "$lib/Models/DTO/ProductAttribute.DTO.Model";

export interface ProductDto {
    id: string;
    title: string;
    appLinksImage:{
        google: string;
        apple: string;
    },
    productAttribute: ProductAttributeDto[];
}