import type { Development } from "$lib/Models/Entities/Development.Entities.Model";

export interface IDevelopmentRepository{
    getDevelopments(): Promise<AppwriteResponse<Development>>;
    getDevelopment(id: string): Promise<Development>;
}