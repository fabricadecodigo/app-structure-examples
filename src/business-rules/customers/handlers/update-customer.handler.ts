import {
  ICustomerRepository,
  ICustomerRepositoryName,
} from '@domain/repositories';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IUpdateCustomerRequest } from '../requests';
import { ICustomerResponse } from '../responses';
import { IUpdateCustomerHandler } from './iupdate-customer.handler';

@Injectable()
export class UpdateCustomerHandler implements IUpdateCustomerHandler {
  constructor(
    @Inject(ICustomerRepositoryName) private repository: ICustomerRepository,
  ) {}

  async execute(request: IUpdateCustomerRequest): Promise<ICustomerResponse> {
    let customer = await this.repository.findById(request.id);
    if (!customer) {
      throw new NotFoundException('Customer not found');
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
