import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Carousel extends Database{
    userId:string,
    video:string,
    deletedAt:Date | null,
}