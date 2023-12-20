import { databases } from "$lib/Appwrite/appwrite";
import { appwrite_database } from "$lib/Env/env.environment";
import type { IProjectRepository } from "$lib/Repositories/Interface/I.Project.repository";
import type { Project } from "$lib/Models/Entities/Project.Entity.Model";
import { Query } from "appwrite";
import { appwrite_collection_our_projects } from "../../Env/env.environment";

export class ProjectRepository implements IProjectRepository {
  async getProjects(): Promise<AppwriteResponse<Project>> {
	try{
		let { documents, total } = (await databases.listDocuments(
		  appwrite_database,
		  appwrite_collection_our_projects,
		  [Query.isNull("deletedAt"), Query.limit(3)]
		)) as AppwriteResponse<Project>;
	
		return { documents, total };
	}catch(e){
		throw e;
	}
  }
  async getProject(id: string): Promise<Project> {
    let document = (await databases.getDocument(
      appwrite_database,
      appwrite_collection_our_projects,
      id
    )) as Project;

    return document;
  }
}
