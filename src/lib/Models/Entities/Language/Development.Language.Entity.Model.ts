import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface DevelopmentLanguage extends Database{
    title_en:string,
    title_kr:string,
    title_ar:string,
    description_en:string | null,
    description_kr:string | null,
    description_ar:string | null,

}