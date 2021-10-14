import {
  Body,
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Param,
} from '@nestjs/common';
import {
  CreateCustomerHandler,
  UpdateCustomerHandler,
  DeleteCustomerHandler,
  GetByIdCustomerHandler,
  GetAllCustomerHandler,
} from '@business-rules/customers/handlers';
import {
  ICreateCustomerRequest,
  IUpdateCustomerRequest,
} from '@business-rules/customers/requests';
import {
  ICustomerResponse,
  ICustomerListResponse,
} from '@business-rules/customers/responses';

@Controller('customers')
export class CustomerController {
  constructor(
    private createCustomerHandler: CreateCustomerHandler,
    private updateCustomerHandler: UpdateCustomerHandler,
    private deleteCustomerHandler: DeleteCustomerHandler,
    private getByIdCustomerHandler: GetByIdCustomerHandler,
    private getAllCustomerHandler: GetAllCustomerHandler,
  ) {}

  @Post()
  async create(
    @Body() payload: ICreateCustomerRequest,
  ): Promise<ICustomerResponse> {
    const response = await this.createCustomerHandler.execute(payload);
    return response;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() payload: IUpdateCustomerRequest,
  ): Promise<ICustomerResponse> {
    if (payload.id !== id) {
      throw new Error('The id from the path is differet from body');
    }
    const response = await this.updateCustomerHandler.execute(payload);
    return response;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteCustomerHandler.execute({
      id,
    });
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ICustomerResponse> {
    const response = await this.getByIdCustomerHandler.execute({
      id,
    });
    return response;
  }

  @Get()
  async getAll(): Promise<ICustomerListResponse> {
    const response = await this.getAllCustomerHandler.execute();
    return response;
  }
}
