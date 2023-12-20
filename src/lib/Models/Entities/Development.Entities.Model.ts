import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Development extends Database{
    userId:string,
    description:string | null,
    image:string,
    deletedAt:Date | null,
}