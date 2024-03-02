import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @ApiProperty()
  @PrimaryColumn()
  productId: number;

  @ApiProperty()
  @Column()
  code: string;

  @ApiProperty()
  @Column()
  productDescription: string;

  @ApiProperty()
  @Column()
  productOrder: number;

  @ApiProperty()
  @Column()
  productUnit: string;

  @ApiProperty()
  @Column()
  productPackSize: number;

  @ApiProperty()
  @Column()
  productPackPrice: number;

  @ApiProperty()
  @Column()
  productPrice: number;

  @ApiProperty()
  @Column()
  productRrp: number;

  @ApiProperty()
  @Column()
  productPackWeight: number;

  @ApiProperty()
  @Column()
  productPackVolume: number;

  @ApiProperty()
  @Column()
  productDefaultCategory: string;

  @ApiProperty()
  @Column()
  productPackBarCode: string;

  @ApiProperty()
  @Column()
  productUnitBarCode: string;

  @ApiProperty()
  @Column()
  productIsVat: boolean;

  @ApiProperty()
  @Column()
  productCompetitorProduct: string;

  @ApiProperty()
  @Column()
  pipeSeparateCategory: string;
}
