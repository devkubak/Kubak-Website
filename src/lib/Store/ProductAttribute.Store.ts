import { ProductAttributesRepository } from "$lib/Repositories/Implementation/ProductAttribute.Repository";
import { writable } from "svelte/store";
import type { ProductAttributeDto } from "$lib/Models/DTO/ProductAttribute.DTO.Model";
import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { Store } from "$lib/Models/Requests/Store.Request.Model";

const productAttributesRepository = new ProductAttributesRepository();

const createProductAttributeStore = () => {
  const { subscribe, set, update } = writable<Store<ProductAttributeDto>>();

  return {
    subscribe,
    set: (value: Store<ProductAttributeDto>) => set(value),

    getAll: async () => {
      try {
        const { documents, total } =
          await productAttributesRepository.getProductAttributes();
        const dto: ProductAttributeDto[] = documents.map((x) =>
          Dto.ToProductAttributeDto(x),
        );
        set({ data: dto, total });
      } catch (e) {
        console.log(e);
      }
    },
    get: async (id: string) => {
      try {
        const document =
          await productAttributesRepository.getProductAttribute(id);
        if (!document) {
          throw new Error("Product Attribute not found");
        }
        const dto: ProductAttributeDto = Dto.ToProductAttributeDto(document);
        return dto;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const productAttributeStore = createProductAttributeStore();
