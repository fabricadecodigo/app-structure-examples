import {
  CreateCustomerHandler,
  DeleteCustomerHandler,
  GetAllCustomerHandler,
  GetByIdCustomerHandler,
  ICreateCustomerHandlerName,
  IDeleteCustomerHandlerName,
  IGetAllCustomerHandlerName,
  IGetByIdCustomerHandlerName,
  IUpdateCustomerHandlerName,
  UpdateCustomerHandler,
} from '@business-rules/customers/handlers';
import { DomainModule } from '@domain/modules';
import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';

@Module({
  imports: [DomainModule],
  controllers: [CustomerController],
  providers: [
    { provide: ICreateCustomerHandlerName, useClass: CreateCustomerHandler },
    { provide: IUpdateCustomerHandlerName, useClass: UpdateCustomerHandler },
    {
      provide: IDeleteCustomerHandlerName,
      useClass: DeleteCustomerHandler,
    },
    { provide: IGetByIdCustomerHandlerName, useClass: GetByIdCustomerHandler },
    { provide: IGetAllCustomerHandlerName, useClass: GetAllCustomerHandler },
  ],
})
export class CustomerModule {}
