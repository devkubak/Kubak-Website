import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { Technology } from "$lib/Models/Entities/Technology.Entity.Model";
import type { ITechnologyRepository } from "$lib/Repositories/Interface/I.Technology.Repository";
import { Query } from "appwrite";

export class TechnologyRepository implements ITechnologyRepository {
  async getTechnologies(): Promise<AppwriteResponse<Technology>> {
    const { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_technologies,

      [Query.limit(8), Query.isNull("deletedAt")],
    )) as AppwriteResponse<Technology>;
    return { documents, total };
  }
  async getTechnology(id: string): Promise<Technology> {
    const technology = (await databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_technologies,
      id,
    )) as Technology;
    return technology;
  }
}
