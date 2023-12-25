import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface TechnologyAttribute extends Database {
    techId: string;
    title: string;
    image: string;
    deletedAt: Date | null;
}