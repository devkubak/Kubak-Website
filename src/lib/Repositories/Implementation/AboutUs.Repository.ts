import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { AboutUs } from "$lib/Models/Entities/AboutUs.Entity.Model";
import type { IAboutUsRepository } from "$lib/Repositories/Interface/I.AboutUs.Repository";
import { Query } from "appwrite";

export class AboutUsRepository implements IAboutUsRepository {
  async getAboutUs(): Promise<AppwriteResponse<AboutUs>> {
    const { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_about_us,
      [Query.limit(6), Query.isNull("deletedAt")],
    )) as AppwriteResponse<AboutUs>;
    return { documents, total };
  }
  async getAboutUsById(id: string): Promise<AboutUs> {
    const aboutUs = (await databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_about_us,
      id,
    )) as AboutUs;
    return aboutUs;
  }
}
