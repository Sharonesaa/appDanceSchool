export interface UserDTO {
  name: string;
  email: string;
  birthdate : string;
  nDni : number;
  username: string;
  password: string;
  profilePicture: string;
  roleId: number;
}

export interface CredentialDTO {
  username: string;
  password: string;
}
