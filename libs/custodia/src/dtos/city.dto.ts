import { IsString } from "class-validator";

import type { AreaDto } from "./area.dto";

export class CityDto {
  @IsString()
  public code!: string;

  @IsString()
  public nom!: string;

  public centre!: AreaDto;

  // eslint-disable-next-line max-len
  // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
  public _score!: number;
}
