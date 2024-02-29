import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form)
    private readonly formsRepository: Repository<Form>,
  ) {}

  async createForm(
    createFormDto: CreateFormDto,
    storeId: number,
  ): Promise<Form> {
    const form = this.formsRepository.create(createFormDto);

    form.store = { id: storeId } as any;

    try {
      return await this.formsRepository.save(form);
    } catch (error) {
      throw new BadRequestException('Invalid data provided');
    }
  }

  findAll() {
    return `This action returns all forms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  async getFormsByStoreId(storeId: number): Promise<Form[]> {
    const forms = await this.formsRepository.find({
      where: { store: { id: storeId } },
    });

    if (!forms.length) {
      throw new NotFoundException(
        `No orders found for the store with ID ${storeId}`,
      );
    }

    return forms;
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
