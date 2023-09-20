import { UserEntity } from './../entities/user.entity';
export class ReturnUserDto{
  
  id: number;

  name : string;
  email : string;
  phone : string;
  cpf : string;
  password : string;

  constructor(userEntity:UserEntity){
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.cpf = userEntity.cpf;
    this.phone = userEntity.phone;
    this.password = userEntity.password;
  }

}