/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ExecutionContext, createParamDecorator } from "@nestjs/common";

import type { FastifyRequest } from "@fastify/multipart";

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
export const File = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const fRequest = req as unknown as FastifyRequest;
  return fRequest.incomingFile;
});
