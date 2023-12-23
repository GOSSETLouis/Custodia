import { Button, TextField } from "@mui/material";
import type { ChangeEvent } from "react";

export interface FileUploadFormProperties {
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  submit: () => void;
}
export function FileUploadForm({ handleFileChange, submit }: FileUploadFormProperties) {
  return (
    <form>
      <TextField
        InputLabelProps={{ shrink: true }}
        variant="standard"
        label="Ajouter un fichier"
        type="file"
        onChange={handleFileChange}
      ></TextField>
      <Button
        onClick={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        Submit
      </Button>
    </form>
  );
}
