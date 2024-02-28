import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhotostoresService } from './photostores.service';
import { CreatePhotostoreDto } from './dto/create-photostore.dto';
import { UpdatePhotostoreDto } from './dto/update-photostore.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Store Photos')
@Controller('photostores')
export class PhotostoresController {
  constructor(private readonly photostoresService: PhotostoresService) {}

  @Post()
  create(@Body() createPhotostoreDto: CreatePhotostoreDto) {
    return this.photostoresService.create(createPhotostoreDto);
  }

  @Get()
  findAll() {
    return this.photostoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photostoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhotostoreDto: UpdatePhotostoreDto,
  ) {
    return this.photostoresService.update(+id, updatePhotostoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photostoresService.remove(+id);
  }
}
