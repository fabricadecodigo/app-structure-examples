import { ICustomerListResponse } from '../responses';
import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '@domain/repositories';

@Injectable()
export class GetAllCustomerHandler {
  constructor(private repository: CustomerRepository) {}

  async execute(): Promise<ICustomerListResponse> {
    const customers = await this.repository.findAll();

    const response: ICustomerListResponse = {
      payload: customers.map((c) => ({
        id: c.id,
        name: c.name,
        email: c.email,
        birthDate: c.birthDate,
      })),
    };

    return response;
  }
}
