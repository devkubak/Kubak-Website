import { Appwrite } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import { PrivacyInformations } from "$lib/Models/Entities/PrivacyInformations.Entity.Model";
import { ID, Query } from "appwrite";
import { IPrivacyInformationsRepository } from "../Interface/I.PrivacyInformations.Repository";
import { GenericListOptions } from "$lib/Models/common/ListOptions.Common.Model";

export class PrivacyInformationsRepository
  implements IPrivacyInformationsRepository
{
  async getPrivacyInformations(
    options?: GenericListOptions | undefined
  ): Promise<AppwriteResponse<PrivacyInformations>> {
    try {
      const query = this.filterQuery([], options);
      const { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_privacyInformations,
        query
      )) as AppwriteResponse<PrivacyInformations>;

      return { documents, total };
    } catch (error) {
      throw error;
    }
  }
  async getPrivacyInformation(id: string): Promise<PrivacyInformations> {
    try {
      return (await Appwrite.databases.getDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_privacyInformations,
        id
      )) as PrivacyInformations;
    } catch (error) {
      throw error;
    }
  }
  private filterQuery(query: string[], options?: GenericListOptions): string[] {
    query = [
      Query.orderDesc(options?.sortField || "$createdAt"),
      Query.limit(options?.limit || 8),
      Query.offset((options?.page! - 1 || 0) * (options?.limit || 8)),
      Query.isNull("deletedAt"),
    ];
    if (options?.search) {
      query.push(Query.startsWith("name", options?.search));
    }
    if (options?.from && options?.to) {
      query.push(Query.between("$createdAt", options?.from, options?.to));
    }
    return query;
  }
}
