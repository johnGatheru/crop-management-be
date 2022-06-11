import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {  Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Messages } from './messages.entity';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController{
    constructor(public messagesservice: MessagesService){}

    @Post()
    create(@Body() post:Messages):Observable<Messages>{
        return this.messagesservice.createMessage(post)
    }
    @Get()
    findAll():Observable<Messages[]>{
        return this.messagesservice.findAllMessages();
    }
    @Put()
    update(@Param('id')id:number,@Body() messages:Messages):Observable<UpdateResult>{
        return this.messagesservice.updateMessages(id,messages)
    }
    @Delete()
    delete(@Param('id') id: number): Observable<DeleteResult>{
        return this.messagesservice.deleteMessages(id);
    }
   
}
