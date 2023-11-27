import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    email:string;

    @Column('date')
    password:Date;

    @Column()
    isActive:boolean;
}
