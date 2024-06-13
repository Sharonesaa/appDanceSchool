export interface IAppointmentDTO {
  id: string;
  userId: string;
  classId: string;
  status: 'active' | 'cancelled';
}