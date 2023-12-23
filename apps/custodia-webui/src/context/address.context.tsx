import type { AddressDto } from "@apps/custodia";
import { useQuery } from "@tanstack/react-query";
import { type ReactNode, createContext } from "react";

import { getAddress } from "../queries/address.query";

interface AddressContext {
  address: AddressDto[];
}
export interface AddressProviderProperties {
  children: ReactNode;
}

export const addressContext = createContext<AddressContext>({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  address: {} as unknown as AddressDto[],
});

export function AddressProvider({ children }: AddressProviderProperties) {
  const addressQuery = useQuery(["address"], async () => {
    const address = await getAddress();
    return {
      address: address.data,
    };
  });
  if (addressQuery.isError) {
    return null;
  }
  if (addressQuery.isLoading) {
    return null;
  }

  return <addressContext.Provider value={addressQuery.data}>{children}</addressContext.Provider>;
}
