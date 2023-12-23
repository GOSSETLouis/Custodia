/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import { randomUUID } from "node:crypto";

import { Entity, PrimaryKey, Property, UuidType } from "@mikro-orm/core";

@Entity()
export class AddressEntity {
  @PrimaryKey({
    type: UuidType,
  })
  public id = randomUUID();

  @Property()
  public name: string;

  @Property({ unique: true })
  public adresse: string;

  @Property()
  public code_postal: number;

  @Property()
  public commune: string;

  @Property({ type: "float" })
  public coordonnee_X: number;

  @Property({ type: "float" })
  public coordonnee_Y: number;

  @Property({ type: "float" })
  public latitude: number;

  @Property({ type: "float" })
  public longitude: number;

  public constructor(parameters: {
    name: string;
    adresse: string;
    code_postal: number;
    commune: string;
    coordonnee_X: number;
    coordonnee_Y: number;
    latitude: number;
    longitude: number;
  }) {
    this.name = parameters.name;
    this.adresse = parameters.adresse;
    this.code_postal = parameters.code_postal;
    this.coordonnee_X = parameters.coordonnee_X;
    this.coordonnee_Y = parameters.coordonnee_Y;
    this.latitude = parameters.latitude;
    this.longitude = parameters.longitude;
    this.commune = parameters.commune;
  }
}
