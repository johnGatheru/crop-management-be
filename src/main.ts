import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.useStaticAssets(join(__dirname, '..', 'files'), {
    prefix: '/files/',
  });
  app.use((req, res: Response, next) => {
    res.setHeader('Content-Disposition', 'attachment');
  });
  const config = new DocumentBuilder()
    .setTitle('Rex api')
    .setDescription('Description')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  await app.listen(3333);
}
bootstrap();
