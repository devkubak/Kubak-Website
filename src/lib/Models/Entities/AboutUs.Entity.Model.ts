import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface AboutUs extends Database {
    title: string | null,
    description: string,
    deletedAt: Date | null,
    image: string
}