import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Development extends Database{
    description:string | null,
    image:string,
    title:string,
    deletedAt:Date | null,
}