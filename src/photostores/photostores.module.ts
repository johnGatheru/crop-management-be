import { Module } from '@nestjs/common';
import { PhotostoresService } from './photostores.service';
import { PhotostoresController } from './photostores.controller';

@Module({
  controllers: [PhotostoresController],
  providers: [PhotostoresService]
})
export class PhotostoresModule {}
