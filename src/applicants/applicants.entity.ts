import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Applicants{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    createdAt:Date;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    id_number: number;

    @ApiProperty()
    @Column()
    phone_number: number;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    selfie: string;

    @ApiProperty()
    @Column()
    academic: string;


}