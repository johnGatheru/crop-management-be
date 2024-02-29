import { ApiProperty } from '@nestjs/swagger';
import { Stores } from '../../stores/stores.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  quantity: number;

  @ManyToOne(() => Stores, (store) => store.orders)
  store: Stores;
}
