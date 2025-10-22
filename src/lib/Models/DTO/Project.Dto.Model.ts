import type { Datetime } from "../Extensions/Datetime.Extension.Model";

export interface ProjectDto {
  id: string;
  name: string;
  description: string | null;
  image: string;
  link: string | null;
}
