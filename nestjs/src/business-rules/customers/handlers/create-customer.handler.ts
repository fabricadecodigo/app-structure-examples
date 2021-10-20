import { ICustomerResponse } from './../responses/icustomer.response';
import { Inject, Injectable } from '@nestjs/common';
import { ICreateCustomerRequest } from '../requests/icreate-customer.request';
import {
  ICustomerRepository,
  ICustomerRepositoryName,
} from '@domain/repositories';
import { ICreateCustomerHandler } from './icreate-customer.handler';

@Injectable()
export class CreateCustomerHandler implements ICreateCustomerHandler {
  constructor(
    @Inject(ICustomerRepositoryName) private repository: ICustomerRepository,
  ) {}

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
