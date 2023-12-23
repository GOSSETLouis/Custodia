import { MikroORM } from "@mikro-orm/core";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "../app.module";
import multiPart from "@fastify/multipart";
import { type NestFastifyApplication, FastifyAdapter } from "@nestjs/platform-fastify";

async function main(): Promise<void> {
  const nestInstance = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      bodyLimit: 100_000_000,
    })
  );
  const logger = await nestInstance.resolve(Logger);
  const orm = await nestInstance.resolve(MikroORM);
  logger.log("Wipe started", "WipeScript");
  await orm.getSchemaGenerator().refreshDatabase();
  logger.log("Wipe finished", "WipeScript");

  await nestInstance.register(multiPart);
  await nestInstance.close();
}

void main();
