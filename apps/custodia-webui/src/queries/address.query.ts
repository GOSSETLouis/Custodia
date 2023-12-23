import type { AddressDto, ListResult } from "@apps/custodia";
import { baseAxios } from "./axios";

export async function uploadExcel(file: File): Promise<AddressDto[]> {
  const result = await baseAxios.post<AddressDto[]>(
    "/address",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { file },
    {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "Content-Type": "multipart/form-data",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: "*/*",
      },
    }
  );
  return result.data;
}

export async function getAddress(): Promise<ListResult<AddressDto>> {
  const result = await baseAxios.get<ListResult<AddressDto>>("/address");

  return result.data;
}
