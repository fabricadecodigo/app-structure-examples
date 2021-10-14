import { Module } from '@nestjs/common';
import { DomainModule } from '@domain/modules';
import {
  CreateCustomerHandler,
  UpdateCustomerHandler,
  DeleteCustomerHandler,
  GetByIdCustomerHandler,
  GetAllCustomerHandler,
} from '@business-rules/customers/handlers';
import { CustomerController } from './customer.controller';

@Module({
  imports: [DomainModule],
  controllers: [CustomerController],
  providers: [
    CreateCustomerHandler,
    UpdateCustomerHandler,
    DeleteCustomerHandler,
    GetByIdCustomerHandler,
    GetAllCustomerHandler,
  ],
})
export class CustomerModule {}
