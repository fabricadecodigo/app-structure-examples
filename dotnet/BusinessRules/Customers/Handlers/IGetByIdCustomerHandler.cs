using dotnet.BusinessRules.Customers.Requests;
using dotnet.BusinessRules.Customers.Responses;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public interface IGetByIdCustomerHandler :
        IBusinessRuleHandler<GetByIdCustomerRequest, CustomerResponse, CustomerItemResponse>
    {

    }
}