import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Stores } from './stores.entity';
import { StoresService } from './stores.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Store operations')
@Controller('stores')
export class StoresController {
  constructor(public storesService: StoresService) {}

  @Post('add')
  async create(@Body() post: Stores) {
    return await this.storesService.createStore(post);
  }

  @Get('getAll')
  async findAll() {
    return await this.storesService.findAllStores();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(+id);
  }

  @Put('update')
  async update(@Param('id') id: number, @Body() storedata: Stores) {
    return await this.storesService.updateStore(id, storedata);
  }
  // manageijjbj

  @Delete('delete/store')
  async delete(@Query('id') id: number) {
    return await this.storesService.deleteStore(id);
  }
}
