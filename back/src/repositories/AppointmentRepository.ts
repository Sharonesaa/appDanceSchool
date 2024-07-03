import { AppDataSource } from '../config/data-source';
import { Appointment } from '../entities/Appointment';

const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({

  async findActiveAppointments(): Promise<Appointment[]> {
    return this.find({ where: { status: 'active' }, relations: ['user', 'class'] });
  },

  async findAppointmentsByUserId(userId: number): Promise<Appointment[]> {
    return this.find({ where: { user: { id: userId } }, relations: ['user', 'class', 'class.style'] });
  },

  async findAppointmentsByClassId(classId: number): Promise<Appointment[]> {
    return this.find({ where: { class: { id: classId } }, relations: ['user', 'class'] });
  },

  async cancelAppointmentById(id: number): Promise<Appointment | null> {
    const appointment = await this.findOne({ where: { id } });
    if (!appointment) {
      throw new Error('Appointment not found');
    }
    appointment.status = 'cancelled';
    return this.save(appointment);
  }
})

export default AppointmentRepository;
