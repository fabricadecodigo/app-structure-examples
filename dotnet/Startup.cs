using dotnet.BusinessRules.Customers.Handlers;
using dotnet.Domain;
using dotnet.Domain.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace dotnet
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services
                .AddDbContext<MyAppDbContext>(option => option.UseInMemoryDatabase("MyAppDatabase"));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "dotnet", Version = "v1" });
            });

            // repositories
            services
                .AddScoped<ICustomerRepository, CustomerRepository>();

            // busines rules
            services
                .AddScoped<ICreateCustomerHandler, CreateCustomerHandler>()
                .AddScoped<IUpdateCustomerHandler, UpdateCustomerHandler>()
                .AddScoped<IDeleteCustomerHandler, DeleteCustomerHandler>()
                .AddScoped<IGetAllCustomerHandler, GetAllCustomerHandler>()
                .AddScoped<IGetByIdCustomerHandler, GetByIdCustomerHandler>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "dotnet v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
