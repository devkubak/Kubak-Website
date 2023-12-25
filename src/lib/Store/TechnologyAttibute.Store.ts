import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { TechnologyAttributeDto } from "$lib/Models/DTO/TechnologyAttribute.Dto.Model";
import type { Store } from "$lib/Models/Requests/Store.Request.Model";
import { TechnologyAttributeRepository } from "$lib/Repositories/Implementation/TechnologyAttribute.Repository";
import { writable } from "svelte/store";

const technologyAttributeRepository = new TechnologyAttributeRepository();

const createTechnologyAttibuteStore = () => {
  const { subscribe, set, update } = writable<Store<TechnologyAttributeDto>>();

  return {
    subscribe,
    set: (value: Store<TechnologyAttributeDto>) => set(value),
    get: async (id: string) => {
      try {
        if (!id) return;
        let document =
          await technologyAttributeRepository.getTechnologyAttribute(id);

        return Dto.ToTechnologyAttributeDto(document);
      } catch (e) {
        console.log(e);
      }
    },

    getAll: async () => {
      try {
        let { documents, total } =
          await technologyAttributeRepository.getTechnologyAttributes();

        let dto: TechnologyAttributeDto[] = documents.map((document) => {
          return Dto.ToTechnologyAttributeDto(
            document
          ) as TechnologyAttributeDto;
        });
        set({ data: dto, total: total });
        return dto;
      } catch (e) {
        console.log(e);
      }
    },
  };
};

export const technologyAttributeStore = createTechnologyAttibuteStore();
