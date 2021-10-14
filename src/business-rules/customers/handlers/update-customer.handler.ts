import { ICustomerResponse } from '../responses';
import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '@domain/repositories';
import { IUpdateCustomerRequest } from '../requests';

@Injectable()
export class UpdateCustomerHandler {
  constructor(private repository: CustomerRepository) {}

  async execute(request: IUpdateCustomerRequest): Promise<ICustomerResponse> {
    let customer = await this.repository.findById(request.id);
    if (!customer) {
      throw new Error('Customer not found');
    }

    customer = await this.repository.update({
      id: request.id,
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
