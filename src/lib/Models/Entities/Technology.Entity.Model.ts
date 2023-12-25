import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";
import type { TechnologyAttribute } from "$lib/Models/Entities/TechnologyAttribute.Entity.Model";

export interface Technology extends Database {
    title: string;
    technologyAttributes: TechnologyAttribute[];
    deletedAt: Date | null;
}