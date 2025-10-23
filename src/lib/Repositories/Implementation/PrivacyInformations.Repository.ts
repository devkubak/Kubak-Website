import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import { PrivacyInformations } from "$lib/Models/Entities/PrivacyInformations.Entity.Model";
import { Query } from "appwrite";
import type { GenericListOptions } from "$lib/Models/common/ListOptions.Common.Model";
import type { IPrivacyInformationsRepository } from "../Interface/I.PrivacyInformations.Repository";

export class PrivacyInformationsRepository
  implements IPrivacyInformationsRepository
{
  async getPrivacyInformations(
    options?: GenericListOptions | undefined,
  ): Promise<AppwriteResponse<PrivacyInformations>> {
    const query = this.filterQuery([], options);
    const { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_privacyInformations,
      query,
    )) as AppwriteResponse<PrivacyInformations>;

    return { documents, total };
  }
  async getPrivacyInformation(id: string): Promise<PrivacyInformations> {
    return (await databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_privacyInformations,
      id,
    )) as PrivacyInformations;
  }
  private filterQuery(query: string[], options?: GenericListOptions): string[] {
    query = [
      Query.orderDesc(options?.sortField || "$createdAt"),
      Query.limit(options?.limit || 8),
      Query.offset(((options?.page || 1) - 1) * (options?.limit || 8)),
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
