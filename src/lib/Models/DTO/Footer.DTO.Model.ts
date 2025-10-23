import type { Language } from "$lib/Models/common/Language.Common.Model";

export interface FooterDto {
  id: string;
  image: string;
  description: Language;
  address1: Language;
  address2: Language;
}
