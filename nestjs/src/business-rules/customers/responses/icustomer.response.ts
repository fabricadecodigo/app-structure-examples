import { IBusinessRulesResponse } from '@business-rules/ibusiness-rules.response';
import { ICustomerItemResponse } from '.';

export interface ICustomerResponse
  extends IBusinessRulesResponse<ICustomerItemResponse> {}
