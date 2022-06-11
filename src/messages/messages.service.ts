import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Messages } from './messages.entity';

@Injectable() 
export class MessagesService {
    constructor(
        @InjectRepository(Messages) 
        private readonly MessagesRepository: Repository<Messages>
        ){}
        createMessage(messages: Messages):Observable<Messages>{
            return from(this.MessagesRepository.save(messages));
        }
        findAllMessages():Observable<Messages[]>{
            return from(this.MessagesRepository.find())
        }
        updateMessages(id: number,messages:Messages):Observable<UpdateResult>{
            return from(this.MessagesRepository.update(id,messages))

        }
        deleteMessages(id: number): Observable<DeleteResult>{
            return from(this.MessagesRepository.delete(id));
        }
}
