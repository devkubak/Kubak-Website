import type { TechnologyAttributeDto } from "$lib/Models/DTO/TechnologyAttribute.Dto.Model";
import type { Language } from "$lib/Models/common/Language.Common.Model";

export interface TechnologyDto {
  id: string;
  title: Language;
  technologyAttributes: TechnologyAttributeDto[];
}
