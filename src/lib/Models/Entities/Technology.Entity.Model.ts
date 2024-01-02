import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";
import type { TechnologyAttribute } from "$lib/Models/Entities/TechnologyAttribute.Entity.Model";
import type { TechnologiesLanguage } from "./Language/Technologies.Language.Entity.Model";

export interface Technology extends Database {
  technologyAttributes: TechnologyAttribute[];
  deletedAt: Date | null;
  technologiesLanguages: TechnologiesLanguage;
}
