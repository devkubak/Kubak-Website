import { GenericListOptions } from "$lib/Models/common/ListOptions.Common.Model";
import type { PrivacyInformations } from "$lib/Models/Entities/PrivacyInformations.Entity.Model";

export interface IPrivacyInformationsRepository {
  getPrivacyInformations(
    options?: GenericListOptions
  ): Promise<AppwriteResponse<PrivacyInformations>>;
  getPrivacyInformation(id: string): Promise<PrivacyInformations>;
}
