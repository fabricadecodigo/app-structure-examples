import { ICustomer } from '@domain/models';

export interface ICustomerRepository {
  create(customer: ICustomer): Promise<ICustomer>;
  update(customer: ICustomer): Promise<ICustomer>;
  delete(id: string): Promise<void>;
  findAll(): Promise<ICustomer[]>;
  findById(id: string): Promise<ICustomer>;
}

export const ICustomerRepositoryName = 'ICustomerRepository';
