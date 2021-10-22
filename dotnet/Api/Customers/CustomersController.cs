using dotnet.BusinessRules.Customers.Handlers;
using dotnet.BusinessRules.Customers.Requests;
using dotnet.BusinessRules.Customers.Responses;
using dotnet.BusinessRules.Exceptions;
using Microsoft.AspNetCore.Mvc;
using System;

namespace dotnet.Api.Customers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomersController : ControllerBase
    {
        private readonly ICreateCustomerHandler _createCustomerHandler;
        private readonly IUpdateCustomerHandler _updateCustomerHandler;
        private readonly IDeleteCustomerHandler _deleteCustomerHandler;
        private readonly IGetAllCustomerHandler _getAllCustomerHandler;
        private readonly IGetByIdCustomerHandler _getByIdCustomerHandler;

        public CustomersController(
            ICreateCustomerHandler createCustomerHandler,
            IUpdateCustomerHandler updateCustomerHandler,
            IDeleteCustomerHandler deleteCustomerHandler,
            IGetAllCustomerHandler getAllCustomerHandler,
            IGetByIdCustomerHandler getByIdCustomerHandler
        )
        {
            _createCustomerHandler = createCustomerHandler;
            _updateCustomerHandler = updateCustomerHandler;
            _deleteCustomerHandler = deleteCustomerHandler;
            _getAllCustomerHandler = getAllCustomerHandler;
            _getByIdCustomerHandler = getByIdCustomerHandler;
        }

        [HttpPost]
        public ActionResult<CustomerResponse> Create([FromBody] CreateCustomerRequest request)
        {
            try
            {
                var response = _createCustomerHandler.Execute(request);

                return Ok(response);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public ActionResult<CustomerResponse> Update([FromRoute] Guid id, [FromBody] UpdateCustomerRequest request)
        {
            try
            {
                request.Id = id;
                var response = _updateCustomerHandler.Execute(request);

                return Ok(response);
            }
            catch (NotFoundException e)
            {
                return NotFound(e.Message);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] Guid id)
        {
            try
            {
                _deleteCustomerHandler.Execute(new DeleteCustomerRequest
                {
                    Id = id
                });

                return Ok();
            }
            catch (NotFoundException e)
            {
                return NotFound(e.Message);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public ActionResult<CustomerResponse> FindById([FromRoute] Guid id)
        {
            try
            {
                var response = _getByIdCustomerHandler.Execute(new GetByIdCustomerRequest
                {
                    Id = id
                });

                return Ok(response);
            }
            catch (NotFoundException e)
            {
                return NotFound(e.Message);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet]
        public ActionResult<CustomerListResponse> FindAll()
        {
            try
            {
                var response = _getAllCustomerHandler.Execute();

                return Ok(response);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}