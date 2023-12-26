import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Footer extends Database {
    image: string;
    description: string;
    address1: string;
    address2: string;
    deletedAt: Date | null;
}