import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { Messages } from './messages.entity';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesservice: MessagesService) {}

  @Post()
  async create(@Body() post: Messages) {
    return await this.messagesservice.createMessage(post);
  }

  @Get()
  async findAll(@Query('page') page: number) {
    return await this.messagesservice.findAllMessages(page);
  }
  //   @Put()
  //   async update(@Param('id') id: number, @Body() messages: Messages) {
  //     return await this.messagesservice.updateMessages(id, messages);
  //   }

  @Delete()
  async delete(@Query('id') id: number) {
    return await this.messagesservice.deleteMessages(id);
  }
}
