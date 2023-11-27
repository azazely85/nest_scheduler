import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @Column({ length: 25 })
    email:string;

    @Column({ length: 25 })
    password:string;

    @Column('datetime')
    created_at:Date;

    @Column('datetime')
    updated_at:Date;

    @Column()
    isActive:boolean;
}
