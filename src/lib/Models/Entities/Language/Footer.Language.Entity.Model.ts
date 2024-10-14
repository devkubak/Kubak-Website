import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface FooterLanguage extends Database {
  description_en: string;
  description_kr: string;
  description_ar: string;
  address1_en: string;
  address1_kr: string;
  address1_ar: string;
  address2_en: string;
  address2_kr: string;
  address2_ar: string;
}
