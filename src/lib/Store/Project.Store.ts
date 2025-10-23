import type { Store } from "$lib/Models/Requests/Store.Request.Model";
import { ProjectRepository } from "$lib/Repositories/Implementation/Project.Repository";
import { writable } from "svelte/store";
import type { ProjectDto } from "$lib/Models/DTO/Project.Dto.Model";
import { Dto } from "$lib/Models/Conversion/Conversion.Model";

const projectRepository = new ProjectRepository();

const createProjectStore = () => {
  // Create a writable store with an initial value of null
  const { subscribe, set, update } = writable<Store<ProjectDto>>({
    data: [],
    total: 0,
  });
  return {
    subscribe,
    set: (value: Store<ProjectDto>) => set(value),
    get: async (_id: string) => {
      try {
        // TODO: Implement get by id
      } catch (e) {
        console.log("Error :", e);
      }
    },
    getAll: async (_page?: number, _filter?: string, _ascending?: boolean) => {
      try {
        let { documents, total } = await projectRepository.getProjects();
        let dto: ProjectDto[] = documents.map((document) => {
          return Dto.ToProjectDto(document) as ProjectDto;
        });
        set({ data: dto, total });
      } catch (e) {
        console.log("Error:", e);
      }
    },
  };
};

export const projectStore = createProjectStore();
