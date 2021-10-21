using System;
using System.Collections.Generic;
using dotnet.Domain.Models;

namespace dotnet.Domain.Repositories
{
    public interface ICustomerRepository
    {
        Customer Create(Customer customer);
        Customer Update(Customer customer);
        void Delete(Customer customer);
        List<Customer> FindAll();
        Customer FindById(Guid id);
    }
}
