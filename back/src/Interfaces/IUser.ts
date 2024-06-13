export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  profilePicture: string;
  active: boolean;
  credentialsId: number;
  roleId: number;
  styleIds: number[];
  classIds: number[];
}


export interface ICredential {
  id: number;
  username: string;
  password: string;
  userId: number;
}