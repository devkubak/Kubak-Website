import type { TechnologyAttributeDto } from "$lib/Models/DTO/TechnologyAttribute.Dto.Model";

export interface TechnologyDto {
    id: string;
    title: string;
    technologyAttributes: TechnologyAttributeDto[] | null;
}