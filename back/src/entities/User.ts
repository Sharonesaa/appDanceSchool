import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinTable, JoinColumn } from "typeorm";
import { Credential } from './Credential';
import { Appointment } from './Appointment';
import { Role } from './Role';


@Entity({ name: "usuarios" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: string;

    @Column()
    nDni: number;

    @Column()
    username: string;

    @Column()
    profilePicture: string;

    @Column()
    active: boolean;
    
    @Column()
    inventory: number;

    @OneToOne(() => Credential, credential => credential.user)
    credential: Credential;

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn({ name: "role_id" })
    role: Role;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];

}
