using dotnet.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet.Domain
{
    public class MyAppDbContext : DbContext
    {
        public MyAppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
    }
}