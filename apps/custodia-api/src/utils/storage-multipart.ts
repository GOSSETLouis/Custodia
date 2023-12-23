declare module "@fastify/multipart" {
  interface FastifyRequest {
    incomingFile: {
      toBuffer: () => Promise<Buffer>;
      file: NodeJS.ReadableStream;
      filepath: string;
      fieldname: string;
      filename: string;
      encoding: string;
      mimetype: string;
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
      fields: import("@fastify/multipart").MultipartFields;
    };
  }
  interface MultipartFileCustom {
    toBuffer: () => Promise<Buffer>;
    file: NodeJS.ReadableStream;
    filepath: string;
    fieldname: string;
    filename: string;
    encoding: string;
    mimetype: string;
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    fields: import("@fastify/multipart").MultipartFields;
  }
}
export {}
