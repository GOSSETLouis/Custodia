import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  BadRequestException,
} from "@nestjs/common";
import type { FastifyRequest } from "@fastify/multipart";

@Injectable()
export class UploadGuard implements CanActivate {
  public async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest() as FastifyRequest;
    const file = await req.incomingFile;
    if (!file) {
      throw new BadRequestException("file expected");
    }
    req.incomingFile = file;
    return true;
  }
}
