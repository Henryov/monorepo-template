import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from "@nestjs/config";


@Injectable()
export class AuthGuard implements CanActivate {
    private readonly secret = this.configService.get('JWT_SECRET')
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) { }

    async canActivate(ctx: ExecutionContext) {
        const request: Request = ctx.switchToHttp().getRequest()
        const token = this.extractTokenFromHeader(request)

        if (!token) {
            throw new UnauthorizedException()
        }

        try {
            const payload = this.jwtService.verifyAsync(token, {
                secret: this.secret
            })

            request['user'] = payload
        } catch {
            throw new UnauthorizedException()
        }

        return true


    }

    private extractTokenFromHeader(request: Request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        return type === 'Bearer' ? token : undefined
    }
}