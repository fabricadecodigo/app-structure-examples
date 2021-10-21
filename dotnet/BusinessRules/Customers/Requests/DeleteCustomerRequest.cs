using System;

namespace dotnet.BusinessRules.Customers.Requests
{
    public class DeleteCustomerRequest : BusinessRuleRequest
    {
        public Guid Id { get; set; }
    }
}