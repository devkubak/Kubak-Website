import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface CarouselLanguage extends Database {
  title_en: string | null;
  title_ar: string | null;
  title_kr: string | null;
}
