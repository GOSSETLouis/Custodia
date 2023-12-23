import { Box, Typography } from "@mui/material";
import { AboutDisplay } from "../about/about-display";

export function Info() {
  return (
    <Box sx={{ marginTop: "3em", padding: "2em" }}>
      <Box>
        <Typography component="p" sx={{ marginTop: "6em", marginBottom: "3em" }}>
          Voici un exemple illustrant à quoi doit ressembler le fichier excel
        </Typography>
      </Box>
      <AboutDisplay />
    </Box>
  );
}
