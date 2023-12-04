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
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Applicants } from './applicants.entity';
import { ApplicantsService } from './applicants.service';

@Controller('/applicants')
export class ApplicantsController {
  constructor(private applicantsservice: ApplicantsService) {}

  // @UseGuards(AuthGuard('local'))
  // @Post('/login')
  // login(@Req() req): any {
  //   console.log('touched');
  //   return req.user;
  // }

  // @Post('/addexpenses')
  // @UseInterceptors(AnyFilesInterceptor())
  // async handleUpload(
  //   @UploadedFiles()
  //   files: Array<Express.Multer.File>,
  //   @Req() req: Request,
  // ) {
  //   const { name, jobTitle, phoneNumber, email } = req.body;

  //   let academicPath = [];
  //   let selfiePath = {};
  //   let idPath = {};
  //   let academic = {};

  //   for (let i = 0; i < files.length; i++) {
  //     if (files[i].fieldname === 'academic') {

  //       academic = {
  //         filename: files[i].originalname,
  //         academicPath: files[i].path,
  //       };
  //       academicPath.push(academic);
  //     }
  //     if (files[i].fieldname === 'selfie') {
  //       selfiePath = {
  //         filename: files[i].originalname,
  //         academicPath: files[i].path,
  //       };
  //     }
  //     if (files[i].fieldname === 'id') {
  //       idPath = {
  //         filename: files[i].originalname,
  //         academicPath: files[i].path,
  //       };
  //     }
  //   }

  //   let objItems = {
  //     name,
  //     jobTitle,
  //     phoneNumber,
  //     email,
  //     academicPath,
  //     selfiePath,
  //     idPath,
  //   };

  //   return this.applicantsservice.saveApplicants(objItems);
  // }
  @Post('/addexpenses')
  async create(@Body() post: Applicants) {
    return await this.applicantsservice.saveApplicants(post);
  }
  // getFile(): StreamableFile {
  //   const file = createReadStream(join(process.cwd(), 'package.json'));
  //   return new StreamableFile(file);
  // }

  @Get()
  async findAll(@Query('page') page: Number) {
    return await this.applicantsservice.findAllApplicants();
  }
  // @Put()
  // async update(@Param('id') id: number, @Body() applicants: Applicants) {
  //   return await this.applicantsservice.updateApplicants(id, applicants);
  // }

  @Delete()
  async delete(@Query('id') id: number) {
    return await this.applicantsservice.deleteApplicants(id);
  }
}
