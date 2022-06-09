import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicantsController } from './applicants.controller';
import { Applicants } from './applicants.entity';
import { ApplicantsService } from './applicants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Applicants])],
  controllers: [ApplicantsController],
  providers: [ApplicantsService]
})
export class ApplicantsModule {}
