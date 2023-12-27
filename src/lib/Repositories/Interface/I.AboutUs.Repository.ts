import type { AboutUs } from "$lib/Models/Entities/AboutUs.Entity.Model";

export interface IAboutUsRepository {
  getAboutUs(): Promise<AppwriteResponse<AboutUs>>;
  getAboutUsById(id: string): Promise<AboutUs>;
}
