import type { Language } from "$lib/Models/Common/Language.Common.Model";

export interface FooterDto {
  id: string;
  image: string;
  description: Language;
  address1: Language;
  address2: Language;
}
