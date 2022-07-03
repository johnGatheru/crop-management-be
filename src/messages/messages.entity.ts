import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  phone_number: number;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  message: string;
}
