import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Applicants } from './applicants.entity';

@Injectable() 
export class ApplicantsService {
    constructor(
        @InjectRepository(Applicants) 
        private readonly ApplicantsRepository: Repository<Applicants>
        ){}
        saveApplicants(applicants: Applicants):Observable<Applicants>{
            return from(this.ApplicantsRepository.save(applicants));
        }
        findAllApplicants():Observable<Applicants[]>{
            return from(this.ApplicantsRepository.find())
        }
        updateApplicants(id: number,applicants:Applicants):Observable<UpdateResult>{
            return from(this.ApplicantsRepository.update(id,applicants))

        }
        deleteApplicants(id: number): Observable<DeleteResult>{
            return from(this.ApplicantsRepository.delete(id));
        }
}
