import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Applicants } from './applicants.entity';
import { ApplicantsService } from './applicants.service';

@Crud({
    model: {
        type:  Applicants
    }
})
@Controller('applicants')
export class ApplicantsController implements CrudController<Applicants>{
    constructor(public service: ApplicantsService){}
   
}
