import type { ServiceDto } from "@apps/custodia";
import { useQuery } from "@tanstack/react-query";
import { createContext, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllServices } from "../queries/service-queries";

interface ServicesContext {
  services: ServiceDto[];
}
export interface ServiceProviderProperties {
  children: ReactNode;
}

export const servicesContext = createContext<ServicesContext>({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  services: {} as unknown as ServiceDto[],
});

export function ServiceProvider({ children }: ServiceProviderProperties) {
  const navigate = useNavigate();
  const location = useLocation();
  const serviceQuery = useQuery(["service"], async () => {
    const service = await getAllServices();
    return {
      services: service.data,
    };
  });
  if (serviceQuery.isError) {
    return null;
  }
  if (serviceQuery.isLoading) {
    return null;
  }

  if (serviceQuery.data.services.total === 0 && location.pathname !== "admin/service") {
    navigate("/admin/service");
  }

  return (
    <servicesContext.Provider value={{ services: serviceQuery.data.services.data }}>
      {children}
    </servicesContext.Provider>
  );
}
