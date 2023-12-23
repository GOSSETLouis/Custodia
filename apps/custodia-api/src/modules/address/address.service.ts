import { MikroORM } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";

import { AddressMapper } from "./address.mapper";
import { AddressEntity } from "./address.entity";
import type { AddressDto, CreateAddressDto, ListResult } from "@apps/custodia";
import type { Stream } from "node:stream";

@Injectable()
export class AddressService {
  private readonly orm: MikroORM;

  private readonly mapper: AddressMapper;

  public constructor(orm: MikroORM, mapper: AddressMapper) {
    this.orm = orm;
    this.mapper = mapper;
  }

  public async list(name: string): Promise<ListResult<AddressDto>> {
    const em = this.orm.em.fork();
    const repository = em.getRepository(AddressEntity);
    const items = await repository.find({ name });
    const total = await repository.count(name);
    const itemsDto = [];
    for await (const item of items) {
      const itemDto = this.mapper.entityToDto(item);
      itemsDto.push(itemDto);
    }
    return {
      data: itemsDto,
      total,
    };
  }

  public async listAll(): Promise<ListResult<AddressDto>> {
    const em = this.orm.em.fork();
    const repository = em.getRepository(AddressEntity);
    const items = await repository.findAll();
    const total = await repository.count();
    const itemsDto = [];
    for await (const item of items) {
      const itemDto = this.mapper.entityToDto(item);
      itemsDto.push(itemDto);
    }
    return {
      data: itemsDto,
      total,
    };
  }

  public async get(id: string): Promise<AddressDto> {
    const em = this.orm.em.fork();
    const repository = em.getRepository(AddressEntity);
    const item = await repository.findOneOrFail(id);
    return this.mapper.entityToDto(item);
  }

  public async create(file: Stream): Promise<AddressDto[]> {
    const addresses: AddressDto[] = [];
    const em = this.orm.em.fork();
    const items = await this.mapper.createDtoToEntity(file);
    for await (const item of items) {
      await em.persistAndFlush(item);
      addresses.push(this.mapper.entityToDto(item));
    }
    return addresses;
  }

  public async update(id: string, parameters: CreateAddressDto): Promise<AddressDto> {
    const em = this.orm.em.fork();
    const item = await this.mapper.updateDtoToEntity(id, parameters, em);
    await em.persistAndFlush(item);
    return this.mapper.entityToDto(item);
  }

  public async delete(id: string): Promise<void> {
    const em = this.orm.em.fork();
    const repository = em.getRepository(AddressEntity);
    const item = await repository.findOneOrFail(id);

    await repository.removeAndFlush(item);
  }
}
