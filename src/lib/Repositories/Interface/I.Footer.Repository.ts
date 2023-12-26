import type { Footer } from "$lib/Models/Entities/Footer.Entity.Model";

export interface IFooterRepository {
    getFooters(): Promise<AppwriteResponse<Footer>>;
}