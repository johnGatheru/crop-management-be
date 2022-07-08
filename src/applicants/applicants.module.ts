import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { ApplicantsController } from './applicants.controller';
import { Applicants } from './applicants.entity';
import { ApplicantsService } from './applicants.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Applicants]),
    MulterModule.register({
      storage: diskStorage({
        destination: './files',

        filename: (req, file, callback) => {
          const filename = `${Date.now()}_${file.originalname
            .split(' ')
            .join('_')
            .toLowerCase()}`;

          callback(null, filename);
        },
      }),
    }),
  ],
  controllers: [ApplicantsController],
  providers: [ApplicantsService],
  exports: [TypeOrmModule],
})
export class ApplicantsModule {}
