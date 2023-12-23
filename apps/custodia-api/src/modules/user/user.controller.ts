import { Body, Controller, Delete, Get, Param, Patch } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { UpdateUserDto, UserDto } from "@apps/custodia";
import { ListResult } from "../../utils/list-result-with-swagger-lib.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  public userService: UserService;

  public constructor(userService: UserService) {
    this.userService = userService;
  }

  @Get("/:userId")
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  public async find(@Param("userId") userId: string): Promise<UserDto> {
    return await this.userService.get(userId);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: ListResult<UserDto>,
  })
  public async findAll(): Promise<ListResult<UserDto>> {
    return await this.userService.list();
  }

  @Patch("/:userId")
  @ApiResponse({
    status: 201,
    type: UserDto,
  })
  public async update(
    @Body() parameters: UpdateUserDto,
    @Param("userId") userId: string
  ): Promise<UserDto> {
    return await this.userService.update(userId, parameters);
  }

  @Delete("/:userId")
  @ApiResponse({
    status: 201,
    type: UserDto,
  })
  public async delete(@Param("userId") userId: string): Promise<void> {
    await this.userService.delete(userId);
  }
}
