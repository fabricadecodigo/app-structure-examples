using System;

namespace dotnet.BusinessRules.Customers.Requests
{
    public class GetByIdCustomerRequest : BusinessRuleRequest
    {
        public Guid Id { get; set; }
    }
}