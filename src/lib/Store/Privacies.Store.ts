import type { GenericListOptions } from "$lib/Models/Common/ListOptions.Common.Model";
import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { PrivaciesDto } from "$lib/Models/DTO/Privacies.DTO.Model";
import type { Store } from "$lib/Models/Response/Store.Response";
import { PrivaciesRepository } from "$lib/Repositories/Implementation/Privacies.Repository";
import { writable } from "svelte/store";

const privaciesRepository = new PrivaciesRepository();

const createPrivacyStore = () => {
  const { subscribe, set, update } = writable<Store<PrivaciesDto>>({
    data: [],
    total: 0,
  });

  return {
    subscribe,
    set: (data: Store<PrivaciesDto>) => set(data),
    get: async (id: string) => {
      try {
        if (!id || id === "") throw new Error("Id is required");
        const response = await privaciesRepository.getPrivacy(id);
        if (!response) throw new Error("Privacy not found");
        const dto = Dto.ToPrivacyDto(response);
        return dto;
      } catch (error) {
        console.log(error);
      }
    },
    getAll: async (options?: GenericListOptions) => {
      try {
        const { documents, total } = await privaciesRepository.getPrivacies(
          options
        );
        const dtos = documents.map((doc)=> Dto.ToPrivacyDto(doc));
        const pages = Math.ceil(total / (options?.limit || 10));
        set({
          data: dtos,
          total: total,
          pages: pages,
        });
        return dtos;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const privaciesStore = createPrivacyStore();
