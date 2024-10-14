import type { ICarouselRepository } from "$lib/Repositories/Interface/I.Carousel.Repository";
import type { Carousel } from "$lib/Models/Entities/Carousel.Entities.Model";
import { Query } from "appwrite";
import { Environment } from "$lib/Env/Environment";
import { Appwrite } from "$lib/Appwrite/appwrite";

export class CarouselRepository implements ICarouselRepository {
  async getCarousels(): Promise<AppwriteResponse<Carousel>> {
    let { documents, total } = (await Appwrite.databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_carousel,
      [Query.isNull("deletedAt"), Query.limit(3)],
    )) as AppwriteResponse<Carousel>;

    return { documents, total };
  }
  async getCarousel(id: string): Promise<Carousel> {
    let document = (await Appwrite.databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_carousel,
      id,
    )) as Carousel;

    return document;
  }
}
