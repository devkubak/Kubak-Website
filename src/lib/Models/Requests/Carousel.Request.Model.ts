import type { Datetime } from '$lib/Models/Extensions/Datetime.Extension.Model';

export interface Card extends Datetime {
	id: string;
	user_id: string;
	title: string;
	video: string;
	expiration_date: Date;
}