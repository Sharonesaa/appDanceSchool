export interface UserDto {
    name: string;
    email: string;
    phone: string;
    password: string;
    profilePicture: string;
    active : boolean
  }

  
export interface UserLoginDTO {
  username: string;
  password: string;
}
  
