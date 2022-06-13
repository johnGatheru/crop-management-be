import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:"*"
  })
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
