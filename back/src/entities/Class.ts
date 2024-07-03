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
    @JoinColumn({ name: 'styleId' }) // Asegúrate de especificar el nombre de la columna si es diferente al nombre por defecto
    style: Style;

}