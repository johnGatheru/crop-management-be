import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Messages } from './messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private readonly MessagesRepository: Repository<Messages>,
  ) {}
  async createMessage(messages: Messages) {
    return await this.MessagesRepository.save(messages);
  }
  async findAllMessages() {
    return await this.MessagesRepository.find();
  }
  //    async updateMessages(id: number,messages:Messages){
  //         return await this.MessagesRepository.update(id,messages)

  //     }
  async deleteMessages(id: number) {
    return await this.MessagesRepository.delete({ id });
  }
}
