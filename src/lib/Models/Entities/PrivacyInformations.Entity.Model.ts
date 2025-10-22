import { Database } from "../Extensions/Database.Extension.Model";

export class PrivacyInformations extends Database {
  title: string = null!;
  description: string = null!;
  privacyId: string = null!;
  deletedAt: Date | null = null;
}
