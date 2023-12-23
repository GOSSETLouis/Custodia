/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import type { AddressDto, CreateAddressDto } from "@apps/custodia";
import type { EntityManager } from "@mikro-orm/core";
import { Injectable } from "@nestjs/common";
import { Workbook } from "exceljs";
import type { Stream } from "node:stream";
import { AddressEntity } from "./address.entity";

interface RowObjectType {
  [key: string]: string;
}
@Injectable()
export class AddressMapper {
  public entityToDto(entity: AddressEntity): AddressDto {
    return {
      id: entity.id,
      name: entity.name,
      adresse: entity.adresse,
      code_postal: entity.code_postal,
      commune: entity.commune,
      coordonnee_X: entity.coordonnee_X,
      coordonnee_Y: entity.coordonnee_Y,
      latitude: entity.latitude,
      longitude: entity.longitude,
    };
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  public async ReadCell(file: Stream) {
    const workBook = new Workbook();
    const www = await workBook.xlsx.read(file);
    const sheet = www.getWorksheet(1);
    let excelTitles: string[] = [];
    const excelData: AddressDto[] = [];

    if (sheet === undefined) {
      throw new Error("sheet undefined");
    }

    // excel to json converter (only the first sheet)
    sheet.eachRow((row, rowNumber) => {
      // rowNumber 0 is empty
      if (rowNumber > 0) {
        const rowValues: string[] = [];

        // get values from row
        row.eachCell((cell) => {
          const values = cell.value;
          if (values !== null && values !== undefined) {
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            rowValues.push(values.toString());
          }
        });

        // titles row
        if (rowNumber === 1) {
          excelTitles = rowValues;
        }

        // table data
        else {
          // create object with the titles and the row values (if any)
          const rowObject: RowObjectType = {};
          for (const [index, title] of excelTitles.entries()) {
            const value = rowValues[index] ?? "";
            rowObject[title] = value;
          }
          // eslint-disable-next-line max-len
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          excelData.push(rowObject as unknown as AddressDto);
        }
      }
    });

    return excelData;
  }

  public async createDtoToEntity(file: Stream): Promise<AddressEntity[]> {
    const entityAdresses: AddressEntity[] = [];
    const addresses = await this.ReadCell(file);
    addresses.forEach((value) => {
      entityAdresses.push(
        new AddressEntity({
          name: value.name,
          adresse: value.adresse,
          code_postal: value.code_postal,
          commune: value.commune,
          coordonnee_X: value.coordonnee_X,
          coordonnee_Y: value.coordonnee_Y,
          latitude: value.latitude,
          longitude: value.longitude,
        })
      );
    });
    return entityAdresses;
  }

  public async updateDtoToEntity(
    id: string,
    dto: CreateAddressDto,
    em: EntityManager
  ): Promise<AddressEntity> {
    const entity = await em.getRepository(AddressEntity).findOneOrFail(id);

    return em.assign(entity, {
      name: dto.name,
    });
  }
}
