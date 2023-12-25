import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { TechnologyDto } from "$lib/Models/DTO/Technology.Dto.Model";
import type { Store } from "$lib/Models/Requests/Store.Request.Model";
import { TechnologyRepository } from "$lib/Repositories/Implementation/Technology.Repository";
import { writable } from "svelte/store";

const technologyRepository = new TechnologyRepository();

const createTechnologyStore = () => {
  const { subscribe, set, update } = writable<Store<TechnologyDto>>();
  return {
    subscribe,
    set: (value: Store<TechnologyDto>) => set(value),
    get: async (id: string) => {
      try {
        if (!id) return;
        let document = await technologyRepository.getTechnology(id);
        return Dto.ToTechnologyDto(document);
      } catch (e) {
        console.log(e);
      }
    },
    getAll: async () => {
      try {
        let { documents, total } = await technologyRepository.getTechnologies();
        let dto: TechnologyDto[] = documents.map((document) => {
          return Dto.ToTechnologyDto(document) as TechnologyDto;
        });
        console.log(dto);

        set({ data: dto, total: total });
        return dto;
      } catch (e) {
        console.log(e);
      }
    },
  };
};

export const technologyStore = createTechnologyStore();
