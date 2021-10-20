import { ICreateCustomerRequest } from '../requests';
import { ICustomerResponse } from '../responses';

export interface ICreateCustomerHandler {
  execute(request: ICreateCustomerRequest): Promise<ICustomerResponse>;
}

export const ICreateCustomerHandlerName = 'ICreateCustomerHandler';
