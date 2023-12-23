import { randomUUID } from "node:crypto";

import { Entity, ManyToOne, OneToOne, PrimaryKey, Property, UuidType } from "@mikro-orm/core";
import { RoleEntity } from "../role/role.entity";
import { ServiceEntity } from "../service/service.entity";

@Entity()
export class UserEntity {
  @PrimaryKey({
    type: UuidType,
  })
  public id = randomUUID();

  @Property({ unique: true })
  public oidcId!: string;

  @Property()
  public firstName!: string;

  @Property()
  public lastName!: string;

  @Property()
  public phone!: string;

  @Property({
    type: "timestamp with time zone",
  })
  public createdAt!: Date;

  @Property()
  public email!: string;

  @OneToOne({ entity: () => RoleEntity })
  public role!: RoleEntity;

  @ManyToOne({ entity: () => ServiceEntity })
  public service!: ServiceEntity;

  public constructor(parameters: {
    firstName: string;
    lastName: string;
    createdAt: Date;
    email: string;
    role: RoleEntity;
    phone: string;
    oidcId: string;
  }) {
    this.firstName = parameters.firstName;
    this.lastName = parameters.lastName;
    this.createdAt = parameters.createdAt;
    this.email = parameters.email;
    this.role = parameters.role;
    this.phone = parameters.phone;
    this.oidcId = parameters.oidcId;
  }
}
