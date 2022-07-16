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
  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.messagesservice.findAllMessages();
  }
  //   @Put()
  //   async update(@Param('id') id: number, @Body() messages: Messages) {
  //     return await this.messagesservice.updateMessages(id, messages);
  //   }
  // @UseGuards(JwtAuthGuard)
  @Delete()
  async delete(@Query('id') id: number) {
    return await this.messagesservice.deleteMessages(id);
  }
}
