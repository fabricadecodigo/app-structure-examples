import { IBusinessRulesResponse } from '@business-rules/ibusiness-rules.response';
import { ICustomerItemResponse } from './';

export interface ICustomerListResponse
  extends IBusinessRulesResponse<ICustomerItemResponse[]> {}
