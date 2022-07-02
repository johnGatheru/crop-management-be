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
    host: 'containers-us-west-54.railway.app',
    port: 6081,
    username: 'postgres',
    password: 'AZ4EFYCy5IHst99HTAv6',
    database: 'railway',
    entities:[Applicants, Messages],
    dropSchema:true,
  
    synchronize: true,
  }), MessagesModule,
 
],
 
  
})
export class AppModule {}
