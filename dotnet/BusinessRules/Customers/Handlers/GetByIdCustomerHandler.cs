using dotnet.BusinessRules.Customers.Requests;
using dotnet.BusinessRules.Customers.Responses;
using dotnet.BusinessRules.Exceptions;
using dotnet.Domain.Repositories;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public class GetByIdCustomerHandler : IGetByIdCustomerHandler
    {
        private readonly ICustomerRepository _customerRepository;

        public GetByIdCustomerHandler(
            ICustomerRepository customerRepository
        )
        {
            _customerRepository = customerRepository;
        }

        public CustomerResponse ExecuteAsync(GetByIdCustomerRequest request)
        {
            var customer = _customerRepository.FindById(request.Id);
            if (customer == null)
            {
                throw new NotFoundException("Cliente não encontrado");
            }

            return new CustomerResponse
            {
                Payload = new CustomerItemResponse
                {
                    Id = customer.Id,
                    Name = customer.Name,
                    Email = customer.Email,
                    BirthDate = customer.BirthDate
                }
            };
        }
    }
}