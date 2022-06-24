import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    username: string;

    @ApiProperty()
    @Column()
    password:string;
}