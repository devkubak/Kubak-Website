import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Footer extends Database {
    image: string;
    deletedAt: Date | null;
}