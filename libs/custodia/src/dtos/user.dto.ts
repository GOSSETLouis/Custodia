import { IsEmail, IsISO8601, IsString, IsUUID, MinLength } from "class-validator";
import type { RoleDto } from "./role.dto";

export class UserDto {
  @IsUUID(4)
  public id!: string;

  @IsString()
  @MinLength(1)
  public oidcId!: string;

  @IsString()
  @MinLength(1)
  public firstName!: string;

  @IsString()
  @MinLength(1)
  public lastName!: string;

  public phone!: string;

  @IsISO8601({ strict: true })
  public createdAt: string;

  @IsEmail()
  public email!: string;

  public role: RoleDto;
}

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  public oidcId!: string;

  @IsString()
  @MinLength(1)
  public firstName!: string;

  @IsString()
  @MinLength(1)
  public lastName!: string;

  public phone!: string;

  @IsEmail()
  public email!: string;

  public role: string;
}

export class UpdateUserDto {
  @IsUUID(4)
  public id!: string;

  @IsString()
  @MinLength(1)
  public oidcId!: string;

  @IsString()
  @MinLength(1)
  public firstName!: string;

  @IsString()
  @MinLength(1)
  public lastName!: string;

  public phone!: string;

  @IsISO8601({ strict: true })
  public createdAt: string;

  @IsEmail()
  public email!: string;
}
