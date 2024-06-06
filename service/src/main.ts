import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import { setupSwagger } from './swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    stopAtFirstError: true
  }))

  setupSwagger(app)
  await app.listen(3000, () => {
    console.log(`Server is running on: http://localhost:3000`)
  });


}
bootstrap();
