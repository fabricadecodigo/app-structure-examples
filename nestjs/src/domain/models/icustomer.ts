import { IEntity } from './entity';

export interface ICustomer extends IEntity {
  name: string;
  email: string;
  birthDate: Date;
}
