import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '@domain/repositories';
import { IDeleteCustomerRequest } from '../requests';

@Injectable()
export class DeleteCustomerHandler {
  constructor(private repository: CustomerRepository) {}

  async execute(request: IDeleteCustomerRequest): Promise<void> {
    await this.repository.delete(request.id);
  }
}
