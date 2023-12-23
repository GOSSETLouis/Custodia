import { IsString } from "class-validator";

export class AreaDto {
  @IsString()
  public coordinates!: number[];

  @IsString()
  public type!: string;
}
