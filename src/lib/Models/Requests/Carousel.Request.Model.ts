import type { Language } from "$lib/Models/common/Language.Common.Model";

export interface CarouselVideo {
  alt: string;
  src: string;
  duration: number;
  url: string;
  title: Language;
}
