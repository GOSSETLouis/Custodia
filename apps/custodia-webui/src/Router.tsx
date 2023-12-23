import { createBrowserRouter } from "react-router-dom";
import { Index } from "./components/pages";
import { Info } from "./components/pages/info";
import { PermanentDrawerLeft } from "./components/permanentDrawer";
import { AddressProvider } from "./context/address.context";

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <AddressProvider>
        <PermanentDrawerLeft>
          <Index />
        </PermanentDrawerLeft>
      </AddressProvider>
    ),
  },
  {
    path: "/about",

    element: (
      <AddressProvider>
        <PermanentDrawerLeft>
          <Info />
        </PermanentDrawerLeft>
      </AddressProvider>
    ),
  },
]);
