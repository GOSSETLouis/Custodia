import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import type { ReactNode } from "react";
import { FileUpload } from "./file-upload/file-upload";
import { Link } from "./Link";
import { ReactSVG } from "react-svg";

const drawerWidth = 240;
export interface PermanentDrawerLeftProperties {
  children: ReactNode;
}

export function PermanentDrawerLeft({ children }: PermanentDrawerLeftProperties) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          // eslint-disable-next-line @typescript-eslint/naming-convention
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Box sx={{ maxWidth: "120px", height: "45px" }}>
            <ReactSVG
              className="wrapper-svg-logo"
              beforeInjection={(svg) => {
                // eslint-disable-next-line max-len
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                svg.classList.add("svg-logo");
              }}
              src="/img/Custodia.svg"
            />
          </Box>
        </Toolbar>
        <Divider />
        <Link name={"Map"} path={"/"} />
        <Link name={"Planing"} path={"/planing"} />
        <Box sx={{ padding: "6px", marginTop: "10px" }}>
          {location.pathname === "/" ? <FileUpload /> : <Box></Box>}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", height: "100vh" }}>
        {children}
      </Box>
    </Box>
  );
}
