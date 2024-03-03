import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ageBracket: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  crop1: string;

  @ApiProperty()
  @IsString()
  crop2: string;

  @ApiProperty()
  @IsString()
  crop3: string;

  @ApiProperty()
  @IsString()
  farmAcreage: string;

  @ApiProperty()
  @IsNotEmpty()
  isDemoDone: boolean;

  @ApiProperty()
  @IsString()
  visitNotes: string;

  @ApiProperty()
  @IsString()
  nextVisit: string;
}
