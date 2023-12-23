import type { CityDto } from "@apps/custodia";
import { baseAxios } from "./axios";

export async function getCities(name: string): Promise<CityDto[]> {
  const result = await baseAxios.get<CityDto[]>(
    `https://geo.api.gouv.fr/communes?nom=${name}&fields=centre&limit=5`
  );
  return result.data;
}
