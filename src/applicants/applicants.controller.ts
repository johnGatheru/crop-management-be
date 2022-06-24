import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Applicants } from './applicants.entity';
import { ApplicantsService } from './applicants.service';

@Controller('/applicants')
export class ApplicantsController {
  constructor(public applicantsservice: ApplicantsService) {}

  @Post('/uploadfile')
  @UseInterceptors(
    AnyFilesInterceptor(),
    // FileFieldsInterceptor([
    //   { name: 'selfie', maxCount: 1 },
    //   { name: 'id', maxCount: 1 },
    //   { name: 'academic', maxCount: 7 },
    // ]),
    // FilesInterceptor('academic', 7, {
    //   storage: diskStorage({
    //     destination: './files',

    //     filename: (req, file, callback) => {
    //       const filename = `${Date.now()}_${file.originalname
    //         .split(' ')
    //         .join('_')
    //         .toLowerCase()}`;

    //       callback(null, filename);
    //     },
    //   }),
    // }),
  )
  handleUpload(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Req() req: Request,
  ) {
    const { name, jobTitle, phoneNumber, email } = req.body;
    console.log(files);
    //   const {path,originalname, filename }= file

    //   let objItems = {name, jobTitle, phoneNumber, email,idImagepath:path, idImagename:originalname, idImagefile:filename}

    //     return this.applicantsservice.saveApplicants(objItems);
  }

  @Get()
  async findAll() {
    return await this.applicantsservice.findAllApplicants();
  }
  @Put()
  async update(@Param('id') id: number, @Body() applicants: Applicants) {
    return await this.applicantsservice.updateApplicants(id, applicants);
  }
  @Delete()
  async delete(@Param('id') id: number) {
    return await this.applicantsservice.deleteApplicants(id);
  }
}
