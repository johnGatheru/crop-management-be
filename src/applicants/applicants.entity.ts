import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

class AcademicData {
    name: string;
    file: string;
}

@Entity() 
export class Applicants{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    createdAt:Date;


    @ApiProperty()
    @Column()
    jobTitle: string;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    phoneNumber: number;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    idImagepath: string;

    @ApiProperty()
    @Column()
    selfie: string;

    @ApiProperty()
    @Column('jsonb',{nullable: true})
    academic: AcademicData;

    @ApiProperty()
    @Column()
    idImagefile: string;

    @ApiProperty()
    @Column()
    idImagename: string
   

   


}