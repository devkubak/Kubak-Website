import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";
import type { TechnologyAttribute } from "$lib/Models/Entities/TechnologyAttribute.Entity.Model";

export interface Technologies extends Database{
    title_en:string,
    title_kr:string,
    title_ar:string,
}