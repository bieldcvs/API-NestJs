import { Injectable } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dtos';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository :Repository<AddressEntity>
  ){};

  async createAddress(
    createAddressDto:CreateAddressDto ,
     userId:number): Promise<AddressEntity>{
    return this.addressRepository.save({
      ...createAddressDto,
      userId,
    })
  }
}
