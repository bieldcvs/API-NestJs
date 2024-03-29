import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({name:'address'})
export class AddressEntity{
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({name:'user_id', nullable:false })
  userId : number;
  @Column({name:'complement', nullable:true })
  complement : string;
  @Column({name:'number'})
  numberAddress : number;
  @Column({name:'CEP', nullable:false })
  CEP : string;
  @Column({name:'city_id', nullable:false })
  cityId : number;

  @CreateDateColumn({name:'created_at', nullable:false })
  createdAt: Date;
  
  @UpdateDateColumn({name:'updated_at', nullable:false })
  updatedAt: Date;
}