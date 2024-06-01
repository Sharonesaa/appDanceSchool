export interface UserDto {
    name: string;
    email: string;
    phone: string;
    password: string;
    profilePicture: string;
    active : boolean;
    credentials:{
      username: string,
      password: string,
    }
  }
  

  export interface CredentialDTO {
    username: string;
    password: string;
  }
  