namespace dotnet.BusinessRules
{
    public interface IBusinessRuleHandler<TRequest>
        where TRequest : BusinessRuleRequest
    {
        void ExecuteAsync(TRequest request);
    }

    public interface IBusinessRuleHandler<TResponse, TPayload>
        where TResponse : BusinessRuleResponse<TPayload>
    {
        TResponse ExecuteAsync();
    }

    public interface IBusinessRuleHandler<TRequest, TResponse, TPayload>
        where TRequest : BusinessRuleRequest
        where TResponse : BusinessRuleResponse<TPayload>
    {
        TResponse ExecuteAsync(TRequest request);
    }
}