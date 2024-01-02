import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";
import type { AboutUsLanguage } from "./Language/AboutUs.Langauge.Entity.Model";

export interface AboutUs extends Database {
    deletedAt: Date | null,
    image: string,
    aboutUsLanguage: AboutUsLanguage
}