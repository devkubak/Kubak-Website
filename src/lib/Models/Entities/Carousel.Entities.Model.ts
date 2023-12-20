import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Carousel extends Database{
    userId:string,
    title:string | null,
    video:string,
    deletedAt:Date | null,
}