import {
  Body,
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Param,
  Inject,
} from '@nestjs/common';
import {
  IUpdateCustomerHandler,
  IDeleteCustomerHandler,
  IDeleteCustomerHandlerName,
  IGetByIdCustomerHandler,
  IGetAllCustomerHandler,
  ICreateCustomerHandlerName,
  ICreateCustomerHandler,
  IUpdateCustomerHandlerName,
  IGetByIdCustomerHandlerName,
  IGetAllCustomerHandlerName,
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
    @Inject(ICreateCustomerHandlerName)
    private createCustomerHandler: ICreateCustomerHandler,
    @Inject(IUpdateCustomerHandlerName)
    private updateCustomerHandler: IUpdateCustomerHandler,
    @Inject(IDeleteCustomerHandlerName)
    private deleteCustomerHandler: IDeleteCustomerHandler,
    @Inject(IGetByIdCustomerHandlerName)
    private getByIdCustomerHandler: IGetByIdCustomerHandler,
    @Inject(IGetAllCustomerHandlerName)
    private getAllCustomerHandler: IGetAllCustomerHandler,
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
