using dotnet.BusinessRules.Customers.Requests;
using dotnet.BusinessRules.Customers.Responses;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public interface ICreateCustomerHandler :
        IBusinessRuleHandler<CreateCustomerRequest, CustomerResponse, CustomerItemResponse>
    {

    }
}