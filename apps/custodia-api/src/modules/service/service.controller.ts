import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { CreateServiceDto, ServiceDto } from "@apps/custodia";
import { ServiceService } from "./service.service";
import { ListResult } from "../../utils/list-result-with-swagger-lib.dto";

@Controller("service")
export class ServiceController {
  public serviceService: ServiceService;

  public constructor(serviceService: ServiceService) {
    this.serviceService = serviceService;
  }

  @Post()
  @ApiResponse({
    status: 201,
    type: ServiceDto,
  })
  public async create(@Body() parameters: CreateServiceDto): Promise<ServiceDto> {
    return await this.serviceService.create(parameters);
  }

  @Get("/:serviceId")
  @ApiResponse({
    status: 200,
    type: ServiceDto,
  })
  public async find(@Param("serviceId") serviceId: string): Promise<ServiceDto> {
    return await this.serviceService.get(serviceId);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: ListResult<ServiceDto>,
  })
  public async findAll(): Promise<ListResult<ServiceDto>> {
    return await this.serviceService.list();
  }

  @Patch("/:serviceId")
  @ApiResponse({
    status: 201,
    type: ServiceDto,
  })
  public async update(
    @Body() parameters: CreateServiceDto,
    @Param("serviceId") serviceId: string
  ): Promise<ServiceDto> {
    return await this.serviceService.update(serviceId, parameters);
  }

  @Delete("/:serviceId")
  @ApiResponse({
    status: 201,
    type: ServiceDto,
  })
  public async delete(@Param("serviceId") serviceId: string): Promise<void> {
    await this.serviceService.delete(serviceId);
  }
}
