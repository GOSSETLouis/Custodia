import { Module } from "@nestjs/common";
import { AddressController } from "./address.controller";
import { AddressService } from "./address.service";
import { AddressMapper } from "./address.mapper";

@Module({
  controllers: [AddressController],
  providers: [AddressService, AddressMapper],
  imports: [],
  exports: [AddressService, AddressMapper],
})
export class AddressModule {}
