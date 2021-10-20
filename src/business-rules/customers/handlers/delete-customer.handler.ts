import { IDeleteCustomerHandler } from './idelete-customer.handler';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  ICustomerRepository,
  ICustomerRepositoryName,
} from '@domain/repositories';
import { IDeleteCustomerRequest } from '../requests';

@Injectable()
export class DeleteCustomerHandler implements IDeleteCustomerHandler {
  constructor(
    @Inject(ICustomerRepositoryName) private repository: ICustomerRepository,
  ) {}

  async execute(request: IDeleteCustomerRequest): Promise<void> {
    const customer = await this.repository.findById(request.id);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    await this.repository.delete(request.id);
  }
}
