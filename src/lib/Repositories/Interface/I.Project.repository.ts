import type { Project } from "$lib/Models/Entities/Project.Entity.Model";

export interface IProjectRepository {
  getProjects(): Promise<AppwriteResponse<Project>>;
  getProject(id: string): Promise<Project>;
}
