using System;

namespace dotnet.Domain.Models
{
    public class Customer : Entity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
    }
}