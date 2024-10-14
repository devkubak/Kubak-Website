import type { Datetime } from "../Extensions/Datetime.Extension.Model";

export interface ProjectDto {
  id: string | null;
  name: string;
  image: string;
  link: string | null;
}
