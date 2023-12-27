import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { AboutUsDto } from "$lib/Models/DTO/AboutUs.DTO.Model";
import type { Store } from "$lib/Models/Requests/Store.Request.Model";
import { AboutUsRepository } from "$lib/Repositories/Implementation/AboutUs.Repository";
import { writable } from "svelte/store";

const aboutUsRepository = new AboutUsRepository();

const createAboutUsStore = () => {
  const { subscribe, set, update } = writable<Store<AboutUsDto>>();

  return {
    subscribe,
    set: (value: Store<AboutUsDto>) => set(value),
    getAll: async () => {
      try {
        const { documents, total } = await aboutUsRepository.getAboutUs();
        const dto: AboutUsDto[] = documents.map((aboutUs) =>
          Dto.ToAboutUsDto(aboutUs)
        );
        set({ data: dto, total });
      } catch (error) {
        console.log(error);
      }
    },
    get: async (id: string) => {
      try {
        const aboutUs = await aboutUsRepository.getAboutUsById(id);
        if (!aboutUs) {
          throw new Error("AboutUs not found");
        }
        const dto: AboutUsDto = Dto.ToAboutUsDto(aboutUs);
        return dto;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const aboutUsStore = createAboutUsStore();
