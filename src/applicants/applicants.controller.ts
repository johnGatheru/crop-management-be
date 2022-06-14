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
   async findAll(){
        return await this.applicantsservice.findAllApplicants();
    }
    @Put()
   async update(@Param('id')id:number,@Body() applicants:Applicants){
        return await this.applicantsservice.updateApplicants(id,applicants)
    }
    @Delete()
    async delete(@Param('id') id: number){
        return await this.applicantsservice.deleteApplicants(id);
    }
   
}
