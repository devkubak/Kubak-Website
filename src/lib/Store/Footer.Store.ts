import { Dto } from "$lib/Models/Conversion/Conversion.Model";
import type { FooterDto } from "$lib/Models/DTO/Footer.DTO.Model";
import { FooterRepository } from "$lib/Repositories/Implementation/Footer.Repository";
import { writable } from "svelte/store";

const footerRepository = new FooterRepository();

const createFooterStore = () => {
  const { subscribe, set, update } = writable<FooterDto>();

  return {
    subscribe,
    set: (value: FooterDto) => set(value),
    get: async () => {
      try {
        const { documents, total } = await footerRepository.getFooters();
        const dto: FooterDto = Dto.ToFooterDto(documents[0]);
        set(dto);
      } catch (e) {
        console.log(e);
      }
    },
  };
};

export const footerStore = createFooterStore();
