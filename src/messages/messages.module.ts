import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { Messages } from './messages.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Messages])],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
