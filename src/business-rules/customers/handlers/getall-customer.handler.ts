import { IGetAllCustomerHandler } from './igetall-customer.handler';
import { ICustomerListResponse } from '../responses';
import { Inject, Injectable } from '@nestjs/common';
import {
  ICustomerRepository,
  ICustomerRepositoryName,
} from '@domain/repositories';

@Injectable()
export class GetAllCustomerHandler implements IGetAllCustomerHandler {
  constructor(
    @Inject(ICustomerRepositoryName) private repository: ICustomerRepository,
  ) {}

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
