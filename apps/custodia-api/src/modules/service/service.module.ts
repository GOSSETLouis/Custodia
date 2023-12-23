import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { ServiceController } from "./service.controller";
import { ServiceMapper } from "./service.mapper";
import { ServiceService } from "./service.service";

@Module({
  imports: [UserModule],
  controllers: [ServiceController],
  providers: [ServiceMapper, ServiceService],
  exports: [ServiceService, ServiceMapper],
})
export class ServiceModule {}
