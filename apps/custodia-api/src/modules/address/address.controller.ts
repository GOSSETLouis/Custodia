import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

import { AddressService } from "./address.service";
import "multer";
import type { MultipartFileCustom } from "@fastify/multipart";
import { AddressDto, type CreateAddressDto, type ListResult } from "@apps/custodia";
import type { FastifyReply, FastifyRequest } from "fastify";

export type CustomMultipartFile = MultipartFileCustom;
export type MyRequest = FastifyRequest;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MyResponse = FastifyReply<any>;
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

  // @UseGuards(UploadGuard)
  public async uploadFile(@Req() req: MyRequest) {
    return await this.addressService.create(req);
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
