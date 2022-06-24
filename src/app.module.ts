import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicants } from './applicants/applicants.entity';
import { ApplicantsModule } from './applicants/applicants.module';
import { Messages } from './messages/messages.entity';
import { MessagesModule } from './messages/messages.module';


@Module({
  imports: [ ApplicantsModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'containers-us-west-66.railway.app',
    port: 5553,
    username: 'postgres',
    password: 'G97drKBMAtEky8REvGhe',
    database: 'railway',
    entities:[Applicants, Messages],
    dropSchema:true,
  
    synchronize: true,
  }), MessagesModule,
 
],
 
  
})
export class AppModule {}
