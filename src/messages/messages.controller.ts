import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {  Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Messages } from './messages.entity';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController{
    constructor(public messagesservice: MessagesService){}

    @Post()
   async create(@Body() post:Messages){
        return await this.messagesservice.createMessage(post)
    }
    @Get()
     async findAll(){
        return await this.messagesservice.findAllMessages();
    }
    @Put()
   async update(@Param('id')id:number,@Body() messages:Messages){
        return await this.messagesservice.updateMessages(id,messages)
    }
    @Delete()
    async delete(@Param('id') id: number){
        return await this.messagesservice.deleteMessages(id);
    }
   
}
