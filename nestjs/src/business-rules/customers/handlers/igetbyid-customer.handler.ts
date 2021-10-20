import { IGetByIdCustomerRequest } from '../requests';
import { ICustomerResponse } from '../responses';

export interface IGetByIdCustomerHandler {
  execute(request: IGetByIdCustomerRequest): Promise<ICustomerResponse>;
}

export const IGetByIdCustomerHandlerName = 'IGetByIdCustomerHandler';
