import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";
import type { FooterLanguage } from "./Language/Footer.Language.Entity.Model";

export interface Footer extends Database {
    image: string;
    deletedAt: Date | null;
    footerLanguages: FooterLanguage;
}