import type { EntityManager } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";
import type { CreateServiceDto, ServiceDto } from "@apps/custodia";
import { UserMapper } from "../user/user.mapper";
import { ServiceEntity } from "./service.entity";

@Injectable()
export class ServiceMapper {
  private readonly userMapper: UserMapper;

  public constructor(userMapper: UserMapper) {
    this.userMapper = userMapper;
  }

  public createDtoToEntity(dto: CreateServiceDto): ServiceEntity {
    return new ServiceEntity({
      name: dto.name,
      postalCode: dto.postalCode,
    });
  }

  public async entityToDto(entity: ServiceEntity, em: EntityManager): Promise<ServiceDto> {
    await em.populate(entity, ["users"]);
    const users = [];
    for await (const user of entity.users.getItems(true)) {
      users.push(await this.userMapper.entityToDto(user, em));
    }
    return {
      id: entity.id,
      name: entity.name,
      postalCode: entity.postalCode,
      users,
    };
  }

  public async updateDtoToEntity(
    id: string,
    dto: CreateServiceDto,
    em: EntityManager
  ): Promise<ServiceEntity> {
    const entity = await em.getRepository(ServiceEntity).findOneOrFail(id);

    return em.assign(entity, {
      name: dto.name,
      postalCode: dto.postalCode,
    });
  }
}
