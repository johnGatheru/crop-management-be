import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Stores } from './stores.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Stores)
    private readonly StoresRepository: Repository<Stores>,
  ) {}
  async createStore(stores: Stores) {
    return await this.StoresRepository.save(stores);
  }
  async findAllStores(): Promise<Stores[]> {
    return await this.StoresRepository.find();
  }
  async updateStore(id: number, stores: Stores) {
    return await this.StoresRepository.update(id, stores);
  }
  async deleteStore(id: number) {
    return await this.StoresRepository.delete({ id });
  }
}
