import type { IDevelopmentRepository } from "$lib/Repositories/Interface/I.Development.repository";
import type { Development } from "$lib/Models/Entities/Development.Entities.Model";
import { Query } from "appwrite";
import { Environment } from "$lib/Env/Environment";
import { Appwrite } from "$lib/Appwrite/appwrite";

export class DevelopmentRepository implements IDevelopmentRepository {
  async getDevelopments(): Promise<AppwriteResponse<Development>> {
    let { documents, total } = (await Appwrite.databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_development,
      [Query.isNull("deletedAt"), Query.limit(8)]
    )) as AppwriteResponse<Development>;

    return { documents, total };
  }
  async getDevelopment(id: string): Promise<Development> {
    let document = (await Appwrite.databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_development,
      id
    )) as Development;

    return document;
  }
}
