import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [AuthModule, UsersModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env', `.env.${process.env.NODE_ENV}`, `.env.${process.env.NODE_ENV}.local`]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
