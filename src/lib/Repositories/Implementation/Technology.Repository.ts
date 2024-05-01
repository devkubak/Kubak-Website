import { Appwrite } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { Technology } from "$lib/Models/Entities/Technology.Entity.Model";
import type { ITechnologyRepository } from "$lib/Repositories/Interface/I.Technology.Repository";
import { Query } from "appwrite";

export class TechnologyRepository implements ITechnologyRepository {
  async getTechnologies(): Promise<AppwriteResponse<Technology>> {
    try {
      const { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_technologies,
      
        
        [Query.limit(8), Query.isNull("deletedAt")]
      )) as AppwriteResponse<Technology>;
      console.log("in repository",documents, total);
      return { documents, total };
    } catch (error) {
      throw error;
    }
  }
  async getTechnology(id: string): Promise<Technology> {
    try {
      const technology = (await Appwrite.databases.getDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_technologies,
        id
      )) as Technology;
      return technology;
    } catch (error) {
      throw error;
    }
  }
}
