using dotnet.BusinessRules.Customers.Requests;
using dotnet.BusinessRules.Customers.Responses;
using dotnet.BusinessRules.Exceptions;
using dotnet.Domain.Repositories;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public class UpdateCustomerHandler : IUpdateCustomerHandler
    {
        private readonly ICustomerRepository _customerRepository;

        public UpdateCustomerHandler(
            ICustomerRepository customerRepository
        )
        {
            _customerRepository = customerRepository;
        }

        public CustomerResponse ExecuteAsync(UpdateCustomerRequest request)
        {
            var customer = _customerRepository.FindById(request.Id);
            if (customer == null)
            {
                throw new NotFoundException("Cliente não encontrado");
            }

            customer.Name = request.Name;
            customer.Email = request.Email;
            customer.BirthDate = request.BirthDate;

            customer = _customerRepository.Update(customer);

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