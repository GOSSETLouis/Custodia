import { type FilterQuery, MikroORM } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";

import type { CreateServiceDto, ServiceDto } from "@apps/custodia";
import { ServiceEntity } from "./service.entity";
import { ServiceMapper } from "./service.mapper";
import type { ListResult } from "../../utils/list-result-with-swagger-lib.dto";

@Injectable()
export class ServiceService {
  private readonly orm: MikroORM;

  private readonly mapper: ServiceMapper;

  public constructor(orm: MikroORM, mapper: ServiceMapper) {
    this.orm = orm;
    this.mapper = mapper;
  }

  public async list(): Promise<ListResult<ServiceDto>> {
    const em = this.orm.em.fork();
    const itemDtos = [];
    const repository = em.getRepository(ServiceEntity);
    const items = await repository.findAll();
    const total = await repository.count();
    for await (const item of items) {
      itemDtos.push(await this.mapper.entityToDto(item, em));
    }
    return {
      data: itemDtos,
      total,
    };
  }

  public async get(filter: FilterQuery<ServiceEntity>): Promise<ServiceDto> {
    const em = this.orm.em.fork();
    const repository = em.getRepository(ServiceEntity);
    const item = await repository.findOneOrFail(filter);
    return await this.mapper.entityToDto(item, em);
  }

  public async create(parameters: CreateServiceDto): Promise<ServiceDto> {
    const em = this.orm.em.fork();
    const item = this.mapper.createDtoToEntity(parameters);
    await em.persistAndFlush(item);
    return await this.mapper.entityToDto(item, em);
  }

  public async update(id: string, parameters: CreateServiceDto): Promise<ServiceDto> {
    const em = this.orm.em.fork();
    const item = await this.mapper.updateDtoToEntity(id, parameters, em);
    await em.persistAndFlush(item);
    return await this.mapper.entityToDto(item, em);
  }

  public async delete(id: string): Promise<void> {
    const em = this.orm.em.fork();
    const repository = em.getRepository(ServiceEntity);
    const item = await repository.findOneOrFail(id);

    await repository.removeAndFlush(item);
  }
}
