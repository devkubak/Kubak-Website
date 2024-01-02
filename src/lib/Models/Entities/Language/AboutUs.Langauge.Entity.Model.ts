import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface AboutUsLanguage extends Database {
    title_en: string,
    title_ar: string | null,
    title_kr: string | null,
    description_en: string,
    description_ar: string | null,
    description_kr: string | null,
}