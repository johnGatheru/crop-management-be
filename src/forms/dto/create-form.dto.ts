import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormDto {
  @IsNotEmpty()
  @IsString()
  ageBracket: string;

  @IsNotEmpty()
  @IsString()
  crop1: string;


  @IsString()
  crop2: string;


  @IsString()
  crop3: string;

  @IsString()
  farmAcreage: string;

  @IsNotEmpty()
  isDemoDone: boolean;


  @IsString()
  visitNotes: string;
}
