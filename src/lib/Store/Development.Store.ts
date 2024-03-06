import type { Store } from "$lib/Models/Requests/Store.Request.Model";
import { DevelopmentRepository } from "$lib/Repositories/Implementation/Development.Repository";
import { writable } from "svelte/store";
import type { DevelopmentDto } from "$lib/Models/DTO/Development.Dto.Model";
import { Dto } from "$lib/Models/Conversion/Conversion.Model";

const developmentRepository = new DevelopmentRepository();

const createDevelopmentStore = () => {
  // Create a writable store with an initial value of null
  const { subscribe, set, update } = writable<Store<DevelopmentDto>>({
    data: [],
    total: 0,
  });
  return {
    subscribe,
    set: (value: Store<DevelopmentDto>) => set(value),
    get: async (id: string) => {
      try {
      } catch (e) {
        console.log("Error :", e);
      }
    },
    getAll: async (page?: number, filter?: string, ascending?: boolean) => {
      try {
        let { documents, total } =
          await developmentRepository.getDevelopments();
         ("Hello There Data Card", documents);

        let dto: DevelopmentDto[] = documents.map((document) => {
          return Dto.ToDevelopmentDto(document) as DevelopmentDto;
        });
        set({ data: dto, total });
      } catch (e) {
        console.log("Error:", e);
      }
    },
  };
};

export const developmentStore = createDevelopmentStore();
