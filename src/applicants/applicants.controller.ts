import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  StreamableFile,
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
import { createReadStream, fstat } from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Applicants } from './applicants.entity';
import { ApplicantsService } from './applicants.service';

@Controller('/applicants')
export class ApplicantsController {
  constructor(public applicantsservice: ApplicantsService) {}

  @Post('/uploadfile')
  @UseInterceptors(AnyFilesInterceptor())
  async handleUpload(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Req() req: Request,
  ) {
    const { name, jobTitle, phoneNumber, email } = req.body;

    let academicPath = '';
    let selfiePath = '';
    let idPath = '';

    for (let i = 0; i < files.length; i++) {
      if (files[i].fieldname === 'academic') {
        academicPath = files[i].path;
      }
      if (files[i].fieldname === 'selfie') {
        selfiePath = files[i].path;
      }
      if (files[i].fieldname === 'id') {
        idPath = files[i].path;
      }
    }

    let objItems = {
      name,
      jobTitle,
      phoneNumber,
      email,
      academicPath,
      selfiePath,
      idPath,
    };

    return this.applicantsservice.saveApplicants(objItems);
  }

  @Get()
  // getFile(): StreamableFile {
  //   const file = createReadStream(join(process.cwd(), 'package.json'));
  //   return new StreamableFile(file);
  // }
  async findAll() {
    return await this.applicantsservice.findAllApplicants();
  }
  @Put()
  async update(@Param('id') id: number, @Body() applicants: Applicants) {
    return await this.applicantsservice.updateApplicants(id, applicants);
  }
  @Delete()
  async delete(@Query('id') id: number) {
    return await this.applicantsservice.deleteApplicants(id);
  }
}
