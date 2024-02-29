import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormDto {
  @IsNotEmpty()
  @IsString()
  ageBracket: string;

  @IsNotEmpty()
  @IsString()
  crop1: string;

  @IsNotEmpty()
  @IsString()
  crop2: string;

  @IsNotEmpty()
  @IsString()
  crop3: string;

  @IsNotEmpty()
  @IsString()
  farmAcreage: string;

  @IsNotEmpty()
  @IsString()
  isDemoDone: Boolean;

  @IsNotEmpty()
  @IsString()
  visitNotes: string;
}
