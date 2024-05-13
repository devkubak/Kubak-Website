import type { GenericListOptions } from "$lib/Models/Common/ListOptions.Common.Model";
import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { PrivaciesDto } from "$lib/Models/DTO/Privacies.DTO.Model";
import type { CreatePrivacyRequest } from "$lib/Models/Requests/CreatePrivacy.Request.Model";
import type { Store } from "$lib/Models/Response/Store.Response";
import { PrivaciesRepository } from "$lib/Repositories/Implementation/Privacies.Repository";
import { get, writable } from "svelte/store";

const privaciesRepository = new PrivaciesRepository();

const createPrivacyStore = () => {
  const { subscribe, set, update } = writable<Store<PrivaciesDto>>({
    data: [],
    total: 0,
  });

  return {
    subscribe,
    set: (data: Store<PrivaciesDto>) => set(data),
    create: async (privacy: CreatePrivacyRequest) => {
      try {
        if (!privacy.name || privacy.name === "") {
          throw new Error("Name is required");
        }
        const response = await privaciesRepository.createPrivacy(privacy);
        const dto = Dto.ToPrivacyDto(response);
        update((privacy) => {
          if (privacy && privacy.data) {
            return {
              data: [...privacy.data, dto],
              total: privacy.total + 1,
            };
          } else {
            return {
              data: [dto],
              total: 1,
            };
          }
        });
        return dto;
      } catch (error) {
        console.log(error);
      }
    },
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
        console.log(documents, total);
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
    update: async (privacy: CreatePrivacyRequest) => {
      try {
        if (!privacy.id || privacy.id === "") {
          throw new Error("Id is required");
        }
        const document = await privaciesRepository.getPrivacy(privacy.id);
        if (!document) throw new Error("Privacy not found");
        if (!privacy.name || privacy.name === "") {
          privacy.name = document.name;
        }
        const response = await privaciesRepository.updatePrivacy(privacy);
        const dto = Dto.ToPrivacyDto(response);
        update((privacy) => {
          if (privacy && privacy.data) {
            const index = privacy.data.findIndex((item) => item.id === dto.id);
            privacy.data[index] = dto;
            return {
              data: privacy.data,
              total: privacy.total,
            };
          } else {
            return {
              data: [dto],
              total: 1,
            };
          }
        });
        return dto;
      } catch (error) {
        console.log(error);
      }
    },
    delete: async (id: string) => {
      try {
        if (!id || id === "") throw new Error("Id is required");
        await privaciesRepository.deletePrivacy(id);
        update((privacy) => {
          if (privacy && privacy.data) {
            const index = privacy.data.findIndex((item) => item.id === id);
            privacy.data.splice(index, 1);
            return {
              data: privacy.data,
              total: privacy.total - 1,
            };
          } else {
            return {
              data: [],
              total: 0,
            };
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const privaciesStore = createPrivacyStore();
