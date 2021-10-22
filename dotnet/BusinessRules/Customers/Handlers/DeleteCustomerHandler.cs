using dotnet.BusinessRules.Customers.Requests;
using dotnet.BusinessRules.Exceptions;
using dotnet.Domain.Repositories;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public class DeleteCustomerHandler : IDeleteCustomerHandler
    {
        private readonly ICustomerRepository _customerRepository;

        public DeleteCustomerHandler(
            ICustomerRepository customerRepository
        )
        {
            _customerRepository = customerRepository;
        }


        public void Execute(DeleteCustomerRequest request)
        {
            var customer = _customerRepository.FindById(request.Id);
            if (customer == null)
            {
                throw new NotFoundException("Cliente não encontrado");
            }

            _customerRepository.Delete(customer);
        }
    }
}