import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Project extends Database {
  userId: string;
  name: string | null;
  image: string;
  deletedAt: Date | null;
}
