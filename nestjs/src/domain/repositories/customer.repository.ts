import { ICustomer } from '@domain/models';
import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from './icustomer.repository';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  private customers: ICustomer[] = [];

  create(customer: ICustomer): Promise<ICustomer> {
    return new Promise((resolve) => {
      customer.id = (this.customers.length + 1).toString();
      customer.createdAt = new Date();
      this.customers.push(customer);
      resolve(customer);
    });
  }

  update(customer: ICustomer): Promise<ICustomer> {
    return new Promise((resolve) => {
      const { id } = customer;
      customer.updatedAt = new Date();
      const entity = this.customers.find((c) => c.id === id);
      Object.assign(entity, customer);

      resolve(customer);
    });
  }

  delete(id: string): Promise<void> {
    return new Promise((resolve) => {
      const index = this.customers.findIndex((c) => c.id === id);
      this.customers.splice(index, 1);
      resolve();
    });
  }

  findAll(): Promise<ICustomer[]> {
    return new Promise((resolve) => {
      resolve(this.customers);
    });
  }

  findById(id: string): Promise<ICustomer> {
    return new Promise((resolve) => {
      const customer = this.customers.find((c) => c.id === id);
      resolve(customer);
    });
  }
}
