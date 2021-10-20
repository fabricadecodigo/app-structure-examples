import { IBusinessRulesRequest } from '@business-rules/ibusiness-rules.request';

export interface ICreateCustomerRequest extends IBusinessRulesRequest {
  name: string;
  email: string;
  birthDate: Date;
}
