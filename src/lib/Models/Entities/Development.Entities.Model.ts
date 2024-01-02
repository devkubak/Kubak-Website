import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Development extends Database{
    image:string,
    deletedAt:Date | null,
}