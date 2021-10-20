import { IUpdateCustomerRequest } from '../requests';
import { ICustomerResponse } from '../responses';

export interface IUpdateCustomerHandler {
  execute(request: IUpdateCustomerRequest): Promise<ICustomerResponse>;
}

export const IUpdateCustomerHandlerName = 'IUpdateCustomerHandler';
