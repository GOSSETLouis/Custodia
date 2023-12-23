/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { IsUUID } from "class-validator";

export class AddressDto {
  @IsUUID()
  public id!: string;

  public name!: string;

  public adresse!: string;

  public code_postal!: number;

  public commune!: string;

  public coordonnee_X!: number;

  public coordonnee_Y!: number;

  public latitude!: number;

  public longitude!: number;
}

export class CreateAddressDto {
  public name!: string;

  public adresse!: string;

  public code_postal!: number;

  public commune!: string;

  public coordonnee_X!: number;

  public coordonnee_Y!: number;

  public latitude!: number;

  public longitude!: number;
}
