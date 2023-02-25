import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, //Hace que solo se agreguen las propiedades que estan en el DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
