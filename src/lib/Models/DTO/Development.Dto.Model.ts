import type { Datetime } from "../Extensions/Datetime.Extension.Model";
import type { Language } from "$lib/Models/Common/Language.Common.Model";

export interface DevelopmentDto{
	id:string | null,
	description:Language,
	image:string,
	title:Language,
}