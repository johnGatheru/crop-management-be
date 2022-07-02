import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

class AcademicData {
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
  jobTitle: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  phoneNumber: number;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  idPath: string;

  @ApiProperty()
  @Column()
  selfiePath: string;

  @ApiProperty()
  @Column('jsonb', { nullable: true })
  academicPath: AcademicData;
}
