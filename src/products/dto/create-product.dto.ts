import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  productId: number;

  @ApiProperty()
  code: string;

  @ApiProperty()
  productDescription: string;

  @ApiProperty()
  productOrder: number;

  @ApiProperty()
  productUnit: string;

  @ApiProperty()
  productPackSize: number;

  @ApiProperty()
  productPackPrice: number;

  @ApiProperty()
  productPrice: number;

  @ApiProperty()
  productRrp: number;

  @ApiProperty()
  productPackWeight: number;

  @ApiProperty()
  productPackVolume: number;

  @ApiProperty()
  productDefaultCategory: string;

  @ApiProperty()
  productPackBarCode: string;

  @ApiProperty()
  productUnitBarCode: string;

  @ApiProperty()
  productIsVat: boolean;

  @ApiProperty()
  productCompetitorProduct: string;

  @ApiProperty()
  pipeSeparateCategory: string;
}
