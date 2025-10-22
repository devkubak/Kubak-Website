import type { Language } from "$lib/Models/Common/Language.Common.Model";

export interface ProductAttributeDto {
  id: string;
  title: Language;
  description: Language;
  image: string;
  index_order: number;
  image_position: number;
}
