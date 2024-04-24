import { Datetime } from "$lib/Models/Extensions/Datetime.Extension.Model";
export class LanguagesDto extends Datetime {
  id: string = null!;
  title: string = null!;
  abbreviation: string = null!;
  active: boolean = null!;
}
