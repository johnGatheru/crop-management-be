import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Messages } from './messages.entity';

@Injectable()
export class MessagesService extends TypeOrmCrudService<Messages>{
    constructor(@InjectRepository(Messages) repo){
        super(repo)
    }
}
