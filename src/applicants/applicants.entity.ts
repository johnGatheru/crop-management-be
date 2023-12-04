import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

class AcademicData {
  name: string;
  file: string;
}
class IdData {
  name: string;
  file: string;
}
class SelfieData {
  name: string;
  file: string;
}

@Entity()
export class Applicants {
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
  buyPrice: number;
}
