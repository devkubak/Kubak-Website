import type { GenericListOptions } from "$lib/Models/common/ListOptions.Common.Model";
import type { Languages } from "$lib/Models/Entities/Languages.Entity.Model";

export interface ILanguagesRepository {
  getLanguages(
    options?: GenericListOptions
  ): Promise<AppwriteResponse<Languages>>;
  getLanguage(id: string): Promise<Languages>;
  updateLanguageActivity(id: string, active: boolean): Promise<Languages>;
  deleteLanguage(id: string): Promise<Languages>;
  // createLanguage: (language: CreateLanguageRequest) => Promise<Language>;
  // updateLanguage: (language: CreateLanguageRequest) => Promise<Language>;
}
