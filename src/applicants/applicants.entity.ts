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
  @Column('jsonb', { nullable: true })
  idPath: IdData;

  @ApiProperty()
  @Column('jsonb', { nullable: true })
  selfiePath: SelfieData;

  @ApiProperty()
  @Column('jsonb', { nullable: true })
  academicPath: AcademicData;
}
