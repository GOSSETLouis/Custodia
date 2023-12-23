import { Type } from "class-transformer";
import { IsNumber, IsString, IsUUID, MinLength, ValidateNested } from "class-validator";
import { UserDto } from "./user.dto";

export class ServiceDto {
  @IsUUID(4)
  public id!: string;

  @IsString()
  @MinLength(1)
  public name!: string;

  @IsNumber()
  public postalCode!: number;

  @ValidateNested({ each: true })
  @Type(() => UserDto)
  public users: UserDto[];
}

export class CreateServiceDto {
  @IsString()
  @MinLength(1)
  public name!: string;

  @IsNumber()
  public postalCode!: number;
}

export class UpdateServiceDto {
  @IsString()
  @MinLength(1)
  public name?: string;

  @IsNumber()
  public postalCode?: number;

  @ValidateNested({ each: true })
  @Type(() => UserDto)
  public users: UserDto[];
}
