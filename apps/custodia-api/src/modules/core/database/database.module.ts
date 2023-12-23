import { ReflectMetadataProvider } from "@mikro-orm/core";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { DatabaseNamingStrategy } from "../../../utils/database-naming-strategy";
import { AddressEntity } from "../../address/address.entity";
import { RoleEntity } from "../../role/role.entity";
import { ServiceEntity } from "../../service/service.entity";
import { UserEntity } from "../../user/user.entity";
import { ConfigModule } from "../config/config.module";
import { ConfigService } from "../config/config.service";

const entities = [UserEntity, RoleEntity, ServiceEntity, AddressEntity];

@Module({
  exports: [MikroOrmModule],

  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        ...configService.database,

        migrations: {
          tableName: "MikroOrmMigrations",
          disableForeignKeys: false,
        },

        schemaGenerator: {
          disableForeignKeys: false,
        },

        forceUtcTimezone: true,
        forceUndefined: true,
        namingStrategy: DatabaseNamingStrategy,
        discovery: { disableDynamicFileAccess: true },
        metadataProvider: ReflectMetadataProvider,
        entities,

        driverOptions: {
          connection: { ssl: false },
        },
      }),

      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    MikroOrmModule.forFeature(entities),
  ],
})
export class DatabaseModule {}
