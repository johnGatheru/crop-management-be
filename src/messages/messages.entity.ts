import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  unit: string;

  @ApiProperty()
  @Column()
  quantity: number;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  sellPrice: number;
}
