import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stores {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty()
  @Column()
  storeName: string;

  @ApiProperty()
  @Column()
  townName: string;

  @ApiProperty()
  @Column()
  category: string;

  @ApiProperty()
  @Column({ nullable: true })
  farmContactName: string;

  @ApiProperty()
  @Column({ nullable: true })
  farmContactNumber: string;

  @ApiProperty()
  @Column()
  location: string;

  @ApiProperty()
  @Column()
  region: string;

  @ApiProperty()
  @Column()
  storeChain: String;

  @ApiProperty()
  @Column({ nullable: true })
  acreage: number;

  @ApiProperty()
  @Column({ nullable: true })
  cropName: string;

  @ApiProperty()
  @Column({ nullable: true })
  email: string;

  @ApiProperty()
  @Column({ nullable: true })
  managerName: string;

  @ApiProperty()
  @Column({ nullable: true })
  managerContact: string;

  @ApiProperty()
  @Column({ nullable: true })
  kraPin: string;

  @ApiProperty()
  @Column({ nullable: true })
  storeContact: string;

  @ApiProperty()
  @Column({ nullable: true })
  storeContactName: string;

  @ApiProperty()
  @Column({ nullable: true })
  farmImage: string;

  @OneToMany(() => Order, (order) => order.store)
  orders: Order[];
}
