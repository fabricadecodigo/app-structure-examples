using System.Linq;
using dotnet.BusinessRules.Customers.Responses;
using dotnet.Domain.Repositories;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public class GetAllCustomerHandler : IGetAllCustomerHandler
    {
        private readonly ICustomerRepository _customerRepository;

        public GetAllCustomerHandler(
            ICustomerRepository customerRepository
        )
        {
            _customerRepository = customerRepository;
        }

        public CustomerListResponse ExecuteAsync()
        {
            var customers = _customerRepository.FindAll();
            return new CustomerListResponse
            {
                Payload = customers
                    .Select(customer => new CustomerItemResponse
                    {
                        Id = customer.Id,
                        Name = customer.Name,
                        Email = customer.Email,
                        BirthDate = customer.BirthDate
                    })
                    .ToList()
            };
        }
    }
}