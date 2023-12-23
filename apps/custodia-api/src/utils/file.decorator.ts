import { type ExecutionContext, createParamDecorator } from "@nestjs/common";

import type { FastifyRequest } from "@fastify/multipart";

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
export const File = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
  const { incomingFile } = ctx.switchToHttp().getRequest<FastifyRequest>();
  return incomingFile;
});
