import type { IProjectRepository } from "$lib/Repositories/Interface/I.Project.repository";
import type { Project } from "$lib/Models/Entities/Project.Entity.Model";
import { Query } from "appwrite";
import { Appwrite } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";

export class ProjectRepository implements IProjectRepository {
  async getProjects(): Promise<AppwriteResponse<Project>> {
    try {
      let { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_our_projects,
        [Query.limit(100), Query.isNull("deletedAt")]
      )) as AppwriteResponse<Project>;

      return { documents, total };
    } catch (e) {
      throw e;
    }
  }
  async getProject(id: string): Promise<Project> {
    let document = (await Appwrite.databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_our_projects,
      id
    )) as Project;

    return document;
  }
}
