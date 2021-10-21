using System;
using System.Collections.Generic;
using System.Linq;
using dotnet.Domain.Models;

namespace dotnet.Domain.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly MyAppDbContext _db;
        public CustomerRepository(MyAppDbContext db)
        {
            _db = db;
        }

        public Customer Create(Customer customer)
        {
            customer.Id = Guid.NewGuid();
            customer.CreatedAt = DateTime.Now;
            _db.Customers.Add(customer);
            _db.SaveChanges();

            return customer;
        }

        public Customer Update(Customer customer)
        {
            customer.UpdatedAt = DateTime.Now;
            _db.SaveChanges();
            return customer;
        }

        public void Delete(Customer customer)
        {
            _db.Customers.Remove(customer);
            _db.SaveChanges();
        }

        public List<Customer> FindAll()
        {
            return _db.Customers.ToList();
        }

        public Customer FindById(Guid id)
        {
            return _db.Customers.SingleOrDefault(q => q.Id == id);
        }
    }
}