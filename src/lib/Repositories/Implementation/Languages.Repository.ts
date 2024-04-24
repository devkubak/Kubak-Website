import { Appwrite } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { GenericListOptions } from "$lib/Models/common/ListOptions.Common.Model";
import type { Languages } from "$lib/Models/Entities/Languages.Entity.Model";
import type { ILanguagesRepository } from "../Interface/I.Languages.Repository";

export class LanguagesRepository implements ILanguagesRepository {
  async getLanguages(
    options?: GenericListOptions
  ): Promise<AppwriteResponse<Languages>> {
    try {
      const { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_languages
      )) as AppwriteResponse<Languages>;

      return {
        documents: documents,
        total: total,
      };
    } catch (error) {
      throw error;
    }
  }
  async getLanguage(id: string): Promise<Languages> {
    try {
      return (await Appwrite.databases.getDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_languages,
        id
      )) as Languages;
    } catch (error) {
      throw error;
    }
  }
  async updateLanguageActivity(
    id: string,
    active: boolean
  ): Promise<Languages> {
    try {
      return (await Appwrite.databases.updateDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_languages,
        id,
        {
          active: active,
        }
      )) as Languages;
    } catch (error) {
      throw error;
    }
  }
  async deleteLanguage(id: string): Promise<Languages> {
    try {
      return (await Appwrite.databases.deleteDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_languages,
        id
      )) as Languages;
    } catch (error) {
      throw error;
    }
  }
}
