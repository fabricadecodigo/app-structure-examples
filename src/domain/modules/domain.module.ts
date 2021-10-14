import { Module } from '@nestjs/common';
import { CustomerRepository } from '@domain/repositories';

@Module({
  providers: [CustomerRepository],
  exports: [CustomerRepository],
})
export class DomainModule {}
