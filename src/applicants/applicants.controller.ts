import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {  Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Applicants } from './applicants.entity';
import { ApplicantsService } from './applicants.service';


@Controller('applicants')
export class ApplicantsController{
    constructor(public applicantsservice: ApplicantsService){}

    @Post('uploadfile')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@Body() aplicantsInfo: Applicants,@UploadedFile() file: Express.Multer.File){
        aplicantsInfo.academic = file.filename;
        return this.applicantsservice.saveApplicants(aplicantsInfo);

        // return {filename: file.filename,
        // message: 'file uploaded successful'
        // }

    }


    @Get()
    findAll():Observable<Applicants[]>{
        return this.applicantsservice.findAllApplicants();
    }
    @Put()
    update(@Param('id')id:number,@Body() applicants:Applicants):Observable<UpdateResult>{
        return this.applicantsservice.updateApplicants(id,applicants)
    }
    @Delete()
    delete(@Param('id') id: number): Observable<DeleteResult>{
        return this.applicantsservice.deleteApplicants(id);
    }
   
}
