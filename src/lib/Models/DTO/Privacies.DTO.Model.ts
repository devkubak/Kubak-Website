import { Datetime } from "../Extensions/Datetime.Extension.Model";
import type { PrivacyInformationDto } from "./PrivacyInformation.DTO.Model";

export class PrivaciesDto {
  id: string = null!;
  name: string = null!;
  lastUpdatedAt: Date = null!;
  informations: Array<PrivacyInformationDto> =
    new Array<PrivacyInformationDto>();
}
