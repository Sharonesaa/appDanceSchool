import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, JoinColumn } from "typeorm";
import { Appointment } from './Appointment';
import { User } from './User';
import { Style } from './Style';

@Entity({ name: "clases" })
export class Class {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    day: string;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @Column()
    price: number;

    @Column({ default: true })
    active: boolean;
    
    @OneToMany(() => Appointment, appointment => appointment.class)
    appointments: Appointment[];
    
    @ManyToOne(() => Style, style => style.classes)
    style: Style;
    styleId: number; // Agrega esta línea para la propiedad styleId
  }
