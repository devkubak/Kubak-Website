import type { Store } from "$lib/Models/Requests/Store.Request.Model";
import { CarouselRepository } from "$lib/Repositories/Implementation/Carousel.Repository";
import { writable } from "svelte/store";
import type { CarouselDto } from "$lib/Models/DTO/Carousel.Dto.Model";
import { Dto } from "$lib/Models/Conversion/Conversion.Model";

const carouselRepository = new CarouselRepository();

const createCarouselStore = () => {
  // Create a writable store with an initial value of null
  const { subscribe, set, update } = writable<Store<CarouselDto>>({
    data: [],
    total: 0,
  });
  return {
    subscribe,
    set: (value: Store<CarouselDto>) => set(value),
    get: async (id: string) => {
      try {
      } catch (e) {
        console.log("Error :", e);
      }
    },
    getAll: async (page?: number, filter?: string, ascending?: boolean) => {
      try {
        let { documents, total } = await carouselRepository.getCarousels();

        let dto: CarouselDto[] = documents.map((document) => {
          return Dto.ToCarouselDto(document) as CarouselDto;
        });
        set({ data: dto, total });
      } catch (e) {
        console.log("Error:", e);
      }
    },
  };
};

export const carouselStore = createCarouselStore();
