/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

function createData(
  name: string,
  adresse: string,
  code_postal: number,
  commune: string,
  coordonnee_X: number,
  coordonnee_Y: number,
  latitude: number,
  longitude: number
) {
  return { name, adresse, code_postal, commune, coordonnee_X, coordonnee_Y, latitude, longitude };
}

export function AboutDisplay() {
  const rows = [
    createData(
      "Ecole primaire publique Courboulay",
      "39 rue Paul Courboulay",
      72_000,
      "Le Mans",
      490_589.4,
      6_770_602.9,
      48.002_291_059_337_8,
      0.191_405_581_528_472
    ),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">name</TableCell>
            <TableCell align="left">adresse</TableCell>
            <TableCell align="left">code_postal</TableCell>
            <TableCell align="left">commune</TableCell>
            <TableCell align="left">coordonnee_X</TableCell>
            <TableCell align="left">coordonnee_Y</TableCell>
            <TableCell align="left">latitude</TableCell>
            <TableCell align="left">longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.adresse}</TableCell>
              <TableCell align="left">{row.code_postal}</TableCell>
              <TableCell align="left">{row.commune}</TableCell>
              <TableCell align="left">{row.coordonnee_X}</TableCell>
              <TableCell align="left">{row.coordonnee_Y}</TableCell>
              <TableCell align="left">{row.latitude}</TableCell>
              <TableCell align="left">{row.longitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
