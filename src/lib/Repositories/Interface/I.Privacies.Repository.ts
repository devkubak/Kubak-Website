import type { GenericListOptions } from "$lib/Models/Common/ListOptions.Common.Model";
import { Privacies } from "$lib/Models/Entities/Privacies.Entity.Model";

export interface IPrivaciesRepository {
  getPrivacies(
    options?: GenericListOptions,
  ): Promise<AppwriteResponse<Privacies>>;
  getPrivacy(id: string): Promise<Privacies>;
}
