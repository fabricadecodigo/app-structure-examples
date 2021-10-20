import { IDeleteCustomerRequest } from '../requests';

export interface IDeleteCustomerHandler {
  execute(request: IDeleteCustomerRequest): Promise<void>;
}

export const IDeleteCustomerHandlerName = 'IDeleteCustomerHandler';
