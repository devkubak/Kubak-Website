import type { TechnologyAttribute } from "$lib/Models/Entities/TechnologyAttribute.Entity.Model";

export interface ITechnologyAttributeAttribute {
    getTechnologyAttributes(): Promise<AppwriteResponse<TechnologyAttribute>>;
    getTechnologyAttribute(id: string): Promise<TechnologyAttribute>;
}