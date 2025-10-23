import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { Footer } from "$lib/Models/Entities/Footer.Entity.Model";

import type { IFooterRepository } from "$lib/Repositories/Interface/I.Footer.Repository";
import { Query } from "appwrite";

export class FooterRepository implements IFooterRepository {
  async getFooters(): Promise<AppwriteResponse<Footer>> {
    const { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_footer,
      [Query.isNull("deletedAt"), Query.limit(1)],
    )) as AppwriteResponse<Footer>;
    return { documents, total };
  }
}
