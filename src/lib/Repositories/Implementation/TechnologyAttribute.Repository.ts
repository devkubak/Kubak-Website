import { databases } from "$lib/Appwrite/appwrite";
import { Environment } from "$lib/Env/Environment";
import type { TechnologyAttribute } from "$lib/Models/Entities/TechnologyAttribute.Entity.Model";
import { Query } from "appwrite";
import type { ITechnologyAttributeAttribute } from "../Interface/I.TechnologyAttribute.Repository";

export class TechnologyAttributeRepository
  implements ITechnologyAttributeAttribute
{
  async getTechnologyAttributes(): Promise<
    AppwriteResponse<TechnologyAttribute>
  > {
    const { documents, total } = (await databases.listDocuments(
      Environment.appwrite_database,
      Environment.appwrite_collection_technology_attribute,
      [Query.limit(20), Query.isNull("deletedAt")],
    )) as AppwriteResponse<TechnologyAttribute>;
    return { documents, total };
  }
  async getTechnologyAttribute(id: string): Promise<TechnologyAttribute> {
    const technologyAttribute = (await databases.getDocument(
      Environment.appwrite_database,
      Environment.appwrite_collection_technology_attribute,
      id,
    )) as TechnologyAttribute;
    return technologyAttribute;
  }
}
