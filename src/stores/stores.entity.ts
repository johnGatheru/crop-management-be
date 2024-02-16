import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column()
  farmContactName: string;

  @ApiProperty()
  @Column()
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
  @Column()
  cropName: string;

  @ApiProperty()
  @Column({ nullable: true })
  email: string;
}
