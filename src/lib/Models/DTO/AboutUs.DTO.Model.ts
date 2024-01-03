import type { Language } from "$lib/Models/Common/Language.Common.Model";

export interface AboutUsDto {
    id: string;
    title: Language | null;
    description: Language;
    image: string;
}