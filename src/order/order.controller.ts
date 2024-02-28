import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Order operations')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post(':storeId')
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @Param('storeId') storeId: number,
  ): Promise<any> {
    return this.orderService.createOrder(createOrderDto, storeId);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }
  @Get('orders/specific/store/:id')
  findOrdersSpecificStore(@Param('id') id: string) {
    return this.orderService.getOrdersByStoreId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
