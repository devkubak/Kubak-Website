import type { Carousel } from "$lib/Models/Entities/Carousel.Entities.Model";

export interface ICarouselRepository{
    getCarousels(): Promise<AppwriteResponse<Carousel>>;
    getCarousel(id: string): Promise<Carousel>;
}