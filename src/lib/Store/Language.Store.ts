import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { LanguagesDto } from "$lib/Models/DTO/Languages.DTO.Model";
import type { Store } from "$lib/Models/Response/Store.Response";
import { LanguagesRepository } from "$lib/Repositories/Implementation/Languages.Repository";
import { writable } from "svelte/store";

const languagesRepository = new LanguagesRepository();

const createLanguageStore = () => {
  const { subscribe, set, update } = writable<Store<LanguagesDto>>();

  return {
    subscribe,
    set: (value: Store<LanguagesDto>) => set(value),
    getAll: async () => {
      try {
        const { documents, total } = await languagesRepository.getLanguages();
        const dtos = documents.map((document) => {
          return Dto.ToLanguageDto(document);
        });

        set({
          data: dtos,
          total: total,
        });
      } catch (error) {
        console.log(error);
      }
    },
    get: async (id: string) => {
      try {
        if (!id && id == "") {
          throw new Error("Id is required");
        }
        const document = await languagesRepository.getLanguage(id);
        if (!document) {
          throw new Error("Language not found");
        }
        const dto = Dto.ToLanguageDto(document);
        return dto;
      } catch (error) {
        console.log(error);
      }
    },
    updateLanguageActivity: async (id: string, active: boolean) => {
      try {
        if (!id && id == "") {
          throw new Error("Id is required");
        }
        const document = await languagesRepository.updateLanguageActivity(
          id,
          active
        );
        if (!document) {
          throw new Error("Language not found");
        }
        const dto = Dto.ToLanguageDto(document);
        update((store) => {
          const data = store.data.map((item) => {
            if (item.id === dto.id) {
              return dto;
            }
            return item;
          });
          return {
            data: data,
            total: store.total,
          };
        });
        return dto;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const languageStore = createLanguageStore();
