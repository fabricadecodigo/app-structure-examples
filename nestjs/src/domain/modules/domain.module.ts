import { Module, Provider } from '@nestjs/common';
import {
  CustomerRepository,
  ICustomerRepositoryName,
} from '@domain/repositories';

const providers: Provider[] = [
  {
    provide: ICustomerRepositoryName,
    useClass: CustomerRepository,
  },
];

@Module({
  providers: providers,
  exports: providers,
})
export class DomainModule {}
