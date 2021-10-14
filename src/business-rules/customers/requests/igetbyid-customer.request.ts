import { IBusinessRulesRequest } from '@business-rules/ibusiness-rules.request';

export interface IGetByIdCustomerRequest extends IBusinessRulesRequest {
  id: string;
}
