import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface ProductLanguage extends Database {
    title_en: string,
    title_kr: string,
    title_ar: string,
}