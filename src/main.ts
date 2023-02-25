import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, //Hace que solo se agreguen las propiedades que estan en el DTO, buena practica
      forbidNonWhitelisted: true, //TIRA ERROR 400 SI PASAMOS PROPIEDAD QUE NO VA EN POSTMAN
    }),
  );
  await app.listen(3000);
}
bootstrap();
