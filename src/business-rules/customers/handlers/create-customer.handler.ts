import { ICustomerResponse } from './../responses/icustomer.response';
import { Injectable } from '@nestjs/common';
import { ICreateCustomerRequest } from '../requests/icreate-customer.request';
import { CustomerRepository } from '@domain/repositories';

@Injectable()
export class CreateCustomerHandler {
  constructor(private repository: CustomerRepository) {}

  async execute(request: ICreateCustomerRequest): Promise<ICustomerResponse> {
    const customer = await this.repository.create({
      name: request.name,
      email: request.email,
      birthDate: request.birthDate,
    });

    const response: ICustomerResponse = {
      payload: {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        birthDate: customer.birthDate,
      },
    };

    return response;
  }
}
