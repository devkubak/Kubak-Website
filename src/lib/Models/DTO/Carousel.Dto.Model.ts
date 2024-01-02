import type { Datetime } from "../Extensions/Datetime.Extension.Model";
import type { Language } from "$lib/Models/common/Language.Common.Model";

export interface CarouselDto{
	id:string | null,
	title:Language,
	video:string,
}