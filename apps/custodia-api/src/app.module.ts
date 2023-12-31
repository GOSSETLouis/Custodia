import { Module } from "@nestjs/common";
import { AddressModule } from "./modules/address/address.module";
import { ConfigModule } from "./modules/core/config/config.module";
import { DatabaseModule } from "./modules/core/database/database.module";
import { LoggerModule } from "./modules/core/logger/logger.module";
import { RoleModule } from "./modules/role/role.module";
import { ServiceModule } from "./modules/service/service.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    LoggerModule,
    UserModule,
    RoleModule,
    ServiceModule,
    AddressModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
