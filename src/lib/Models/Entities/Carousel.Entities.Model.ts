import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";
import type { CarouselLanguage } from "./Language/Carousel.Language.Entity.Model";

export interface Carousel extends Database {
  userId: string;
  video: string;
  deletedAt: Date | null;
  carouselLanguages: CarouselLanguage;
}
