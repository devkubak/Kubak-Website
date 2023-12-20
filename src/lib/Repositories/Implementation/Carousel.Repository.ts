import { databases } from '$lib/Appwrite/appwrite';
import { appwrite_database, appwrite_collection_carousel } from '$lib/Env/env.environment';
import type { ICarouselRepository } from '$lib/Repositories/Interface/I.Carousel.repository';
import type { Carousel } from '$lib/Models/Entities/Carousel.Entities.Model';
import { Query } from 'appwrite';

export class CarouselRepository implements ICarouselRepository {
	async getCarousels(): Promise<AppwriteResponse<Carousel>> {
		let { documents, total } = (await databases.listDocuments(
			appwrite_database,
			appwrite_collection_carousel,
			[
				Query.isNull("deletedAt"),
				Query.limit(3)
			  ]
		)) as AppwriteResponse<Carousel>;

		return { documents, total };
	}
	async getCarousel(id: string): Promise<Carousel> {
		let document = (await databases.getDocument(
			appwrite_database,
			appwrite_collection_carousel,
			id
		)) as Carousel;

		return document;
	}
}
