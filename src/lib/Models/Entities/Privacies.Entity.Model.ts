import { Database } from "../Extensions/Database.Extension.Model";
import type { PrivacyInformations } from "./PrivacyInformations.Entity.Model";

export class Privacies extends Database {
  name: string = null!;
  lastUpdatedAt: Date = null!;
  informations: Array<PrivacyInformations> = new Array<PrivacyInformations>();
  deletedAt: Date | null = null;
}
