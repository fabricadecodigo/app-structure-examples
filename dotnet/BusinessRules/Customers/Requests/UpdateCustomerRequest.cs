using System;

namespace dotnet.BusinessRules.Customers.Requests
{
    public class UpdateCustomerRequest : BusinessRuleRequest
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
    }
}