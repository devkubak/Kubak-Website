import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface ProductAttributeLanguage extends Database {
  title_en: string;
  title_kr: string;
  title_ar: string;
  description_en: string;
  description_kr: string;
  description_ar: string;
}
