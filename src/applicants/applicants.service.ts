import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Applicants } from './applicants.entity';

@Injectable() 
export class ApplicantsService extends TypeOrmCrudService<Applicants>{
    constructor(@InjectRepository(Applicants) repo){
        super(repo)
    }
}
