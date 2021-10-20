import { IBusinessRulesRequest } from '@business-rules/ibusiness-rules.request';

export interface IDeleteCustomerRequest extends IBusinessRulesRequest {
  id: string;
}
