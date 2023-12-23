import { createBrowserRouter } from "react-router-dom";
import { Index } from "./components/pages";
import { AddressProvider } from "./context/address.context";

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <AddressProvider>
        <Index />
      </AddressProvider>
    ),
  },
]);
