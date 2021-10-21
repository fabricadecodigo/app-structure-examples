using System.Collections.Generic;
using dotnet.BusinessRules.Customers.Responses;

namespace dotnet.BusinessRules.Customers.Handlers
{
    public interface IGetAllCustomerHandler :
        IBusinessRuleHandler<CustomerListResponse, List<CustomerItemResponse>>
    {

    }
}