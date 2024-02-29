import { ApiProperty } from '@nestjs/swagger';
import { Stores } from '../../stores/stores.entity';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Form {
  // @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  ageBracket: string;

  @ApiProperty()
  @Column()
  crop1: string;

  @ApiProperty()
  @Column()
  crop2: string;

  @ApiProperty()
  @Column()
  crop3: string;

  @ApiProperty()
  @Column()
  farmAcreage: string;

  @ApiProperty()
  @Column()
  isDemoDone: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  visitNotes: string;

  @ManyToOne(() => Stores, (store) => store.forms)
  store: Stores;
}
