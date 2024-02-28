import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(
    createOrderDto: CreateOrderDto,
    storeId: number,
  ): Promise<Order> {
    const order = this.orderRepository.create(createOrderDto);

    order.store = { id: storeId } as any;

    try {
      return await this.orderRepository.save(order);
    } catch (error) {
      throw new BadRequestException('Invalid data provided');
    }
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async getOrdersByStoreId(storeId: number): Promise<Order[]> {
    const orders = await this.orderRepository.find({
      where: { store: { id: storeId } },
    });

    if (!orders.length) {
      throw new NotFoundException(
        `No orders found for the store with ID ${storeId}`,
      );
    }

    return orders;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
