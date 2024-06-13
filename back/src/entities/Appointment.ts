import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from './User';
import { Class } from './Class';

@Entity({ name: "turnos" })
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: "usuario_id" })
    user: User;

    @ManyToOne(() => Class, clase => clase.appointments)
    @JoinColumn({ name: "clase_id" })
    class: Class;
}
