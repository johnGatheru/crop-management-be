import { Injectable } from '@nestjs/common';
import { CreatePhotostoreDto } from './dto/create-photostore.dto';
import { UpdatePhotostoreDto } from './dto/update-photostore.dto';

@Injectable()
export class PhotostoresService {
  create(createPhotostoreDto: CreatePhotostoreDto) {
    return 'This action adds a new photostore';
  }

  findAll() {
    return `This action returns all photostores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photostore`;
  }

  update(id: number, updatePhotostoreDto: UpdatePhotostoreDto) {
    return `This action updates a #${id} photostore`;
  }

  remove(id: number) {
    return `This action removes a #${id} photostore`;
  }
}
