import { Appwrite } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import { GenericListOptions } from "$lib/Models/Common/ListOptions.Common.Model";
import { Query } from "appwrite";
import { IPrivaciesRepository } from "../Interface/I.Privacies.Repository";
import { Privacies } from "$lib/Models/Entities/Privacies.Entity.Model";

export class PrivaciesRepository implements IPrivaciesRepository {
  async getPrivacies(
    options?: GenericListOptions | undefined
  ): Promise<AppwriteResponse<Privacies>> {
    try {
      const query = this.filterQuery([], options);
      const { documents, total } = (await Appwrite.databases.listDocuments(
        Environment.appwrite_database,
        Environment.appwrite_collection_privacies,
        query
      )) as AppwriteResponse<Privacies>;
      return { documents, total };
    } catch (error) {
      throw error;
    }
  }
  async getPrivacy(id: string): Promise<Privacies> {
    try {
      return (await Appwrite.databases.getDocument(
        Environment.appwrite_database,
        Environment.appwrite_collection_privacies,
        id
      )) as Privacies;
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
