using dotnet.BusinessRules.Customers.Requests;
using dotnet.BusinessRules.Customers.Responses;
using dotnet.Domain.Models;
using dotnet.Domain.Repositories;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public class CreateCustomerHandler : ICreateCustomerHandler
    {
        private readonly ICustomerRepository _customerRepository;

        public CreateCustomerHandler(
            ICustomerRepository customerRepository
        )
        {
            _customerRepository = customerRepository;
        }

        public CustomerResponse ExecuteAsync(CreateCustomerRequest request)
        {
            var customer = _customerRepository.Create(new Customer
            {
                Name = request.Email,
                Email = request.Email,
                BirthDate = request.BirthDate
            });

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