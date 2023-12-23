import { randomUUID } from "node:crypto";

import { Collection, Entity, OneToMany, PrimaryKey, Property, UuidType } from "@mikro-orm/core";
import { UserEntity } from "../user/user.entity";

@Entity()
export class ServiceEntity {
  @PrimaryKey({
    type: UuidType,
  })
  public id = randomUUID();

  @Property()
  public name: string;

  @Property()
  public postalCode: number;

  @OneToMany(() => UserEntity, (relation) => relation.service)
  public users = new Collection<UserEntity>(this);

  public constructor(parameters: { name: string; postalCode: number }) {
    this.name = parameters.name;
    this.postalCode = parameters.postalCode;
  }
}
