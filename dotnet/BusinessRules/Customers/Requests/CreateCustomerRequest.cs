using System;

namespace dotnet.BusinessRules.Customers.Requests
{
    public class CreateCustomerRequest : BusinessRuleRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
    }
}