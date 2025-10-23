import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import { Query } from "appwrite";
import { Privacies } from "$lib/Models/Entities/Privacies.Entity.Model";
import type { GenericListOptions } from "$lib/Models/common/ListOptions.Common.Model";
import type { IPrivaciesRepository } from "../Interface/I.Privacies.Repository";

export class PrivaciesRepository implements IPrivaciesRepository {
  async getPrivacies(
    options?: GenericListOptions | undefined,
  ): Promise<AppwriteResponse<Privacies>> {
    const query = this.filterQuery([], options);
    const { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_privacies,
      query,
    )) as AppwriteResponse<Privacies>;
    return { documents, total };
  }
  async getPrivacy(id: string): Promise<Privacies> {
    return (await databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_privacies,
      id,
    )) as Privacies;
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
