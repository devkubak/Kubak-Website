import { databases } from "$lib/Appwrite/appwrite";
import {
  appwrite_collection_development,
  appwrite_database,
} from "$lib/Env/env.environment";
import type { IDevelopmentRepository } from "$lib/Repositories/Interface/I.Development.repository";
import type { Development } from "$lib/Models/Entities/Development.Entities.Model";
import { Query } from "appwrite";

export class DevelopmentRepository implements IDevelopmentRepository {
  async getDevelopments(): Promise<AppwriteResponse<Development>> {
    let { documents, total } = (await databases.listDocuments(
      appwrite_database,
      appwrite_collection_development,
      [Query.isNull("deletedAt")]
    )) as AppwriteResponse<Development>;

    return { documents, total };
  }
  async getDevelopment(id: string): Promise<Development> {
    let document = (await databases.getDocument(
      appwrite_database,
      appwrite_collection_development,
      id
    )) as Development;

    return document;
  }
}
