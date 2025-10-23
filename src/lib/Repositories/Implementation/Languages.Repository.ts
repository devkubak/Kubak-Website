import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { GenericListOptions } from "$lib/Models/common/ListOptions.Common.Model";
import type { Languages } from "$lib/Models/Entities/Languages.Entity.Model";
import { Query } from "appwrite";
import type { ILanguagesRepository } from "../Interface/I.Languages.Repository";

export class LanguagesRepository implements ILanguagesRepository {
  async getLanguages(
    _options?: GenericListOptions,
  ): Promise<AppwriteResponse<Languages>> {
    const { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_languages,
      [Query.equal("active", true)],
    )) as AppwriteResponse<Languages>;

    return {
      documents: documents,
      total: total,
    };
  }
  async getLanguage(id: string): Promise<Languages> {
    return (await databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_languages,
      id,
    )) as Languages;
  }
  async updateLanguageActivity(
    id: string,
    active: boolean,
  ): Promise<Languages> {
    return (await databases.updateDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_languages,
      id,
      {
        active: active,
      },
    )) as Languages;
  }
  async deleteLanguage(id: string): Promise<Languages> {
    return (await databases.deleteDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_languages,
      id,
    )) as Languages;
  }
}
