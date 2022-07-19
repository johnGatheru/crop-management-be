import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Applicants } from './applicants.entity';

@Injectable()
export class ApplicantsService {
  constructor(
    @InjectRepository(Applicants)
    private readonly ApplicantsRepository: Repository<Applicants>,
  ) {}
  async saveApplicants(applicants: any) {
    return await this.ApplicantsRepository.save(applicants);
  }
  async findAllApplicants(page: number = 1) {
    return await this.ApplicantsRepository.find({
      take: 5,
      skip: 5 * (page - 1),
    });
  }
  //    async updateApplicants(id: number,applicants:Applicants){
  //         return await this.ApplicantsRepository.update(id,applicants);

  //     }
  async deleteApplicants(id: number) {
    return await this.ApplicantsRepository.delete(id);
  }
}
