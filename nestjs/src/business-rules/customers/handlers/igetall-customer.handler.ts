import { ICustomerListResponse } from '../responses';

export interface IGetAllCustomerHandler {
  execute(): Promise<ICustomerListResponse>;
}

export const IGetAllCustomerHandlerName = 'IGetAllCustomerHandler';
