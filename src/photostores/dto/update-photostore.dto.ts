import { PartialType } from '@nestjs/swagger';
import { CreatePhotostoreDto } from './create-photostore.dto';

export class UpdatePhotostoreDto extends PartialType(CreatePhotostoreDto) {}
