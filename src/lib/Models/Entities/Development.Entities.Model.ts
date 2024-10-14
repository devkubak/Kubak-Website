import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";
import type { DevelopmentLanguage } from "./Language/Development.Language.Entity.Model";

export interface Development extends Database {
  image: string;
  deletedAt: Date | null;
  developmentLanguages: DevelopmentLanguage;
}
