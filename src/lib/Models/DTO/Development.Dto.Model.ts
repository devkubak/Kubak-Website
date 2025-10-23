
import type { Language } from "$lib/Models/common/Language.Common.Model";

export interface DevelopmentDto {
  id: string | null;
  description: Language;
  image: string;
  title: Language;
}
