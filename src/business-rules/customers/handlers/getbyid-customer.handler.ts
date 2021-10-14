import { ICustomerResponse } from '../responses';
import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '@domain/repositories';
import { IGetByIdCustomerRequest } from '../requests';

@Injectable()
export class GetByIdCustomerHandler {
  constructor(private repository: CustomerRepository) {}

  async execute(request: IGetByIdCustomerRequest): Promise<ICustomerResponse> {
    const customer = await this.repository.findById(request.id);

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
