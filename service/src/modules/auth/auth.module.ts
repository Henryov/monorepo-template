import { Module, InternalServerErrorException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [UsersModule,

    JwtModule.registerAsync({
      global: true,
      useFactory(configService: ConfigService) {
        const secret = configService.get('JWT_SECRET')
        if (!secret) throw new InternalServerErrorException()
        return {
          secret,
          signOptions: { expiresIn: '1d' },
        }
      },
      inject: [ConfigService]
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
