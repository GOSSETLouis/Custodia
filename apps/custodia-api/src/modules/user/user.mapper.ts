import type { EntityManager } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";
import type { CreateUserDto, UpdateUserDto, UserDto } from "@apps/custodia";
import { RoleEntity } from "../role/role.entity";
import { RoleMapper } from "../role/role.mapper";

import { UserEntity } from "./user.entity";

@Injectable()
export class UserMapper {
  private readonly roleMapper: RoleMapper;

  public constructor(roleMapper: RoleMapper) {
    this.roleMapper = roleMapper;
  }

  public async createDtoToEntity(dto: CreateUserDto, em: EntityManager): Promise<UserEntity> {
    const role = await em.getRepository(RoleEntity).findOneOrFail(dto.role);
    return new UserEntity({
      firstName: dto.firstName,
      lastName: dto.lastName,
      createdAt: new Date(),
      email: dto.email,
      role,
      phone: dto.phone,
      oidcId: dto.oidcId,
    });
  }

  public async entityToDto(entity: UserEntity, em: EntityManager): Promise<UserDto> {
    await em.populate(entity, ["role"]);
    const role = this.roleMapper.entityToDto(entity.role);

    return {
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      createdAt: new Date(entity.createdAt).toISOString(),
      email: entity.email,
      phone: entity.phone,
      role,
      oidcId: entity.oidcId,
    };
  }

  public async updateDtoToEntity(
    id: string,
    dto: UpdateUserDto,
    em: EntityManager
  ): Promise<UserEntity> {
    const entity = await em.getRepository(UserEntity).findOneOrFail(id);

    return em.assign(entity, {
      firstName: dto.firstName,
      lastName: dto.lastName,
      createdAt: new Date(dto.createdAt),
      email: dto.email,
    });
  }
}
