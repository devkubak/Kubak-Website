import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { ProductDto } from "$lib/Models/DTO/Product.DTO.Model";
import { ProductsRepository } from "$lib/Repositories/Implementation/Products.Repository";
import { writable } from "svelte/store";

const productsRepository = new ProductsRepository();

const createProductStore = () => {
  const { subscribe, set, update } = writable<ProductDto>();

  return {
    subscribe,
    set: (value: ProductDto) => set(value),
    get: async () => {
      try {
        const { documents, total } = await productsRepository.getProducts();
        console.log(documents);
        const dto: ProductDto = Dto.ToProductDto(documents[0]);
        set(dto);
      } catch (e) {
        console.log(e);
      }
    },
  };
};

export const productStore = createProductStore();
