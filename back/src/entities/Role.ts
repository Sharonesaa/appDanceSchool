import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from './User';

@Entity({ name: "roles" })
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => User, user => user.role)
    users: User[];

    @Column({ default: true })
    active: boolean;
}
