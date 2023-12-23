/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type ChangeEvent, useState } from "react";

import { uploadExcel } from "../../queries/address.query";
import { FileUploadForm } from "./file-upload.form";

export function FileUpload() {
  const [csvFile, setCsvFile] = useState<File[]>();
  const queryClient = useQueryClient();
  const [fileTitle, setFileTitle] = useState<string>("Choisir un fichier");
  const uploadFileMutation = useMutation({
    mutationFn: async (file: File) => await uploadExcel(file),

    onSuccess: () => {
      void queryClient.invalidateQueries(["address"]);
    },
  });

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const [file] = event.target.files;
      if (file !== undefined) {
        const files = [file];
        if (file.name !== undefined) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setFileTitle(file.name);
        }
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
      <FileUploadForm handleFileChange={handleFileChange} submit={onSubmit} fileTitle={fileTitle} />
    </>
  );
}
