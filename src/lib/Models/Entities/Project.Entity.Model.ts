import type { Database } from "$lib/Models/Extensions/Database.Extension.Model";

export interface Project extends Database {
  userId: string;
  name: string;
  description: string | null;
  image: string;
  link: string | null;
  deletedAt: Date | null;
}
