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
  @Put('update')
  async update(@Param('id') id: number, @Body() messages: Stores) {
    return await this.storesService.updateStore(id, messages);
  }
  // manageijjbj

  @Delete('delete/store')
  async delete(@Query('id') id: number) {
    return await this.storesService.deleteStore(id);
  }
}
