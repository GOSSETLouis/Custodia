import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

import { AddressService } from "./address.service";
import { Readable } from "node:stream";
import { AddressDto, CreateAddressDto, type ListResult } from "@apps/custodia";
import "multer";
import { File } from "../../utils/file.decorator";
import { UploadGuard } from "../upload/upload.guard";
import type { MultipartFileCustom } from "@fastify/multipart";

export type CustomMultipartFile = MultipartFileCustom;
@Controller("/address")
export class AddressController {
  private readonly addressService: AddressService;

  public constructor(addressService: AddressService) {
    this.addressService = addressService;
  }

  @Get()
  public async findAll(): Promise<ListResult<AddressDto>> {
    return await this.addressService.listAll();
  }

  @Get(":userId")
  @ApiResponse({
    status: 200,
    type: AddressDto,
  })
  public async get(
    @Param("userId")
    userId: string
  ): Promise<ListResult<AddressDto>> {
    return await this.addressService.list(userId);
  }

  @Post()
  @UseGuards(UploadGuard)
  public async uploadFile(
    @File()
    file: CustomMultipartFile
  ) {
    return await this.addressService.create(Readable.from(await file.toBuffer()));
  }

  @Patch(":addressId")
  @ApiResponse({
    status: 200,
    type: AddressDto,
  })
  public async update(
    @Param("addressId")
    addressId: string,
    @Body()
    parameters: CreateAddressDto
  ): Promise<AddressDto> {
    return await this.addressService.update(addressId, parameters);
  }

  @Delete(":addressId")
  @ApiResponse({
    status: 200,
  })
  public async delete(
    @Param("addressId")
    addressId: string
  ): Promise<void> {
    await this.addressService.delete(addressId);
  }
}
