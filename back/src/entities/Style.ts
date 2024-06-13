import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from './User';
import { Class } from './Class';


@Entity({ name: "estilos" })
export class Style {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column({ default: true })
    active: boolean;

    @OneToMany(() => Class, clase => clase.style)
    classes: Class[];
}

