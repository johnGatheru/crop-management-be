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
      host: 'containers-us-west-54.railway.app',
      port: 6081,
      username: 'postgres',
      password: 'AZ4EFYCy5IHst99HTAv6',
      database: 'railway',
      entities: [Applicants, Messages, User],
      dropSchema: false,
      synchronize: false,
    }),
    MessagesModule,
  ],
})
export class AppModule {}
