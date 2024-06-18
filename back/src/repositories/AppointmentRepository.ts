import { EntityRepository, Repository } from 'typeorm';
import { Appointment } from '../entities/Appointment';

@EntityRepository(Appointment)
export class AppointmentRepository extends Repository<Appointment> {
  async findActiveAppointments(): Promise<Appointment[]> {
    return this.find({ where: { status: 'active' }, relations: ['user', 'class'] });
  }

  async findAppointmentsByUserId(userId: number): Promise<Appointment[]> {
    return this.find({ where: { user: { id: userId } }, relations: ['user', 'class'] });
  }

  async findAppointmentsByClassId(classId: number): Promise<Appointment[]> {
    return this.find({ where: { class: { id: classId } }, relations: ['user', 'class'] });
  }

  async cancelAppointmentById(id: number): Promise<Appointment | null> {
    const appointment = await this.findOne({ where: { id } });
    if (!appointment) {
      throw new Error('Appointment not found');
    }
    appointment.status = 'cancelled';
    return this.save(appointment);
  }
}

export default AppointmentRepository;
