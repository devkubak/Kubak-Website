import type { IProjectRepository } from "$lib/Repositories/Interface/I.Project.repository";
import type { Project } from "$lib/Models/Entities/Project.Entity.Model";
import { Query } from "appwrite";
import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";

export class ProjectRepository implements IProjectRepository {
  async getProjects(): Promise<AppwriteResponse<Project>> {
    let { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_our_projects,
      [Query.limit(100), Query.isNull("deletedAt")],
    )) as AppwriteResponse<Project>;

    return { documents, total };
  }
  async getProject(id: string): Promise<Project> {
    let document = (await databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_our_projects,
      id,
    )) as Project;

    return document;
  }
}
