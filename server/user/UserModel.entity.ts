import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('UserModel')
export class UserModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string
}
