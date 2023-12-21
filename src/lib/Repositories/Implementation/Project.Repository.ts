import { databases } from "$lib/Appwrite/appwrite";
import { appwrite_database } from "$lib/Env/env.environment";
import type { IProjectRepository } from "$lib/Repositories/Interface/I.Project.repository";
import type { Project } from "$lib/Models/Entities/Project.Entity.Model";
import { appwrite_collection_projects } from "$lib/Env/env.environment";
import { Query } from "appwrite";

export class ProjectRepository implements IProjectRepository {
  async getProjects(): Promise<AppwriteResponse<Project>> {
	try{
		let { documents, total } = (await databases.listDocuments(
		  appwrite_database,
		  appwrite_collection_projects
		)) as AppwriteResponse<Project>;
	
		return { documents, total };
	}catch(e){
		throw e;
	}
  }
  async getProject(id: string): Promise<Project> {
    let document = (await databases.getDocument(
      appwrite_database,
      appwrite_collection_projects,
      id
    )) as Project;

    return document;
  }
}
