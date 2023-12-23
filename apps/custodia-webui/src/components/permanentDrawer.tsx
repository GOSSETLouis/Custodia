import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import type { ReactNode } from "react";
import { FileUpload } from "./file-upload/file-upload";
import { Link } from "./Link";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const drawerWidth = 240;
export interface PermanentDrawerLeftProperties {
  children: ReactNode;
}

export function PermanentDrawerLeft({ children }: PermanentDrawerLeftProperties) {
  const location = useLocation();
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
          <Box
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
          >
            <Typography component="p" sx={{ fontWeight: "bold" }}>
              Custodia
            </Typography>
          </Box>
        </Toolbar>
        <Divider />
        <Link name={"Map"} path={"/"} />
        <Link name={"Info"} path={"/about"} />
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
