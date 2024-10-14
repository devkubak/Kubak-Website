import type { Technology } from "$lib/Models/Entities/Technology.Entity.Model";

export interface ITechnologyRepository {
  getTechnologies(): Promise<AppwriteResponse<Technology>>;
  getTechnology(id: string): Promise<Technology>;
}
