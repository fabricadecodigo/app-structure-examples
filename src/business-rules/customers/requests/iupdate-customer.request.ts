import { IBusinessRulesRequest } from '@business-rules/ibusiness-rules.request';

export interface IUpdateCustomerRequest extends IBusinessRulesRequest {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
}
