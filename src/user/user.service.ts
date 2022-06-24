import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
    private readonly userRepository: Repository<User>
    ){}

   async findUser(username: string, password: string) {
        return await this.userRepository.findOneBy({username, password});
    }
}



