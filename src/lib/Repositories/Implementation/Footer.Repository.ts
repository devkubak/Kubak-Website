import { Appwrite } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { Footer } from "$lib/Models/Entities/Footer.Entity.Model";

import type { IFooterRepository } from "$lib/Repositories/Interface/I.Footer.Repository";
import { ID, Query } from "appwrite";

export class FooterRepository implements IFooterRepository {
  async getFooters(): Promise<AppwriteResponse<Footer>> {
    try {
      const { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_footer,
        [Query.isNull("deletedAt"), Query.limit(1)]
      )) as AppwriteResponse<Footer>;
      return { documents, total };
    } catch (error) {
      throw error;
    }
  }
}
