using dotnet.BusinessRules.Customers.Requests;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public interface IDeleteCustomerHandler :
        IBusinessRuleHandler<DeleteCustomerRequest>
    {

    }
}