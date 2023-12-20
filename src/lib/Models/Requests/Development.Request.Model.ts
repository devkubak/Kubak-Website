import type { Datetime } from '$lib/Models/Extensions/Datetime.Extension.Model';

export interface Card extends Datetime {
	id: string;
	user_id: string;
	description: string;
	image: string;
}