import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
// import { ErrorFilter } from './error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // app.useGlobalFilters(new ErrorFilter());

  const config = app.get(ConfigService);

  app.setGlobalPrefix(config.get<string>('ENV'));
  const port = config.get<number>('PORT');
  await app.listen(port);
}
bootstrap();
