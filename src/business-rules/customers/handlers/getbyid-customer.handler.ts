import {
  ICustomerRepository,
  ICustomerRepositoryName,
} from '@domain/repositories';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IGetByIdCustomerRequest } from '../requests';
import { ICustomerResponse } from '../responses';
import { IGetByIdCustomerHandler } from './igetbyid-customer.handler';

@Injectable()
export class GetByIdCustomerHandler implements IGetByIdCustomerHandler {
  constructor(
    @Inject(ICustomerRepositoryName) private repository: ICustomerRepository,
  ) {}

  async execute(request: IGetByIdCustomerRequest): Promise<ICustomerResponse> {
    const customer = await this.repository.findById(request.id);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

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
