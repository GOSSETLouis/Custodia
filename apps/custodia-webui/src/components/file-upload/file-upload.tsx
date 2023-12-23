import { useMutation } from "@tanstack/react-query";
import { type ChangeEvent, useState } from "react";

import { uploadExcel } from "../../queries/address.query";
import { FileUploadForm } from "./file-upload.form";

export function FileUpload() {
  const [csvFile, setCsvFile] = useState<File[]>();
  const uploadFileMutation = useMutation({
    mutationFn: async (file: File) => await uploadExcel(file),
  });

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const [file] = event.target.files;
      if (file !== undefined) {
        const files = [file];
        setCsvFile(files);
      }
    }
  }

  function onSubmit() {
    if (csvFile?.[0] !== undefined) {
      uploadFileMutation.mutate(csvFile[0]);
    }
  }
  return (
    <>
      <FileUploadForm handleFileChange={handleFileChange} submit={onSubmit} />
    </>
  );
}
