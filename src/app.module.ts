import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicants } from './applicants/applicants.entity';
import { ApplicantsModule } from './applicants/applicants.module';
import { AuthModule } from './auth/auth.module';
import { Messages } from './messages/messages.entity';
import { MessagesModule } from './messages/messages.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ApplicantsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-dry-lake-94038782-pooler.us-east-1.postgres.vercel-storage.com',
      port: 5432,
      username: 'default',
      password: 'cUQ1m7tEiDqs',
      database: 'verceldb',
      ssl: true,

      // connectString:
      //   'postgres://default:cUQ1m7tEiDqs@ep-dry-lake-94038782-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb',
      entities: [Applicants, Messages, User],
      dropSchema: true,
      synchronize: true,
    }),
    MessagesModule,
  ],
})
export class AppModule {}
