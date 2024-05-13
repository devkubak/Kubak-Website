import { GenericListOptions } from "$lib/Models/common/ListOptions.Common.Model";
import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { PrivacyInformationDto } from "$lib/Models/DTO/PrivacyInformation.DTO.Model";
import type { Store } from "$lib/Models/Response/Store.Response";
import { PrivacyInformationsRepository } from "$lib/Repositories/Implementation/PrivacyInformations.Repository";
import { writable } from "svelte/store";

const privacyInformationsRepository = new PrivacyInformationsRepository();

const createPrivacyInformationStore = () => {
  const { subscribe, set, update } = writable<Store<PrivacyInformationDto>>({
    data: [],
    total: 0,
  });

  return {
    subscribe,
    set: (data: Store<PrivacyInformationDto>) => set(data),
    get: async (id: string) => {
      try {
        if (!id || id === "") throw new Error("Id is required");
        const response =
          await privacyInformationsRepository.getPrivacyInformation(id);
        if (!response) throw new Error("Privacy Information not found");
        const dto = Dto.ToPrivacyInformationDto(response);
        return dto;
      } catch (error) {
        console.log(error);
      }
    },
    getAll: async (options?: GenericListOptions) => {
      try {
        const { documents, total } =
          await privacyInformationsRepository.getPrivacyInformations(options);
        const dtos = documents.map(Dto.ToPrivacyInformationDto);
        const pages = Math.ceil(total / (options?.limit || 10));
        set({
          data: dtos,
          total: total,
        });
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const privacyInformationStore = createPrivacyInformationStore();
