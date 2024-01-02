import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface AboutUs extends Database {
    deletedAt: Date | null,
    image: string
}