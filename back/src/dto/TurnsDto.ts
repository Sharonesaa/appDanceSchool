export interface AppointmentDTO {
    id: string;
    userId: string;
    date: string;
    time: string;
    class : string;
    status: 'active' | 'cancelled';
   
  }
  