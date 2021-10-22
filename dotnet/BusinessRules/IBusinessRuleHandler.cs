namespace dotnet.BusinessRules
{
    public interface IBusinessRuleHandler<TRequest>
        where TRequest : BusinessRuleRequest
    {
        void Execute(TRequest request);
    }

    public interface IBusinessRuleHandler<TResponse, TPayload>
        where TResponse : BusinessRuleResponse<TPayload>
    {
        TResponse Execute();
    }

    public interface IBusinessRuleHandler<TRequest, TResponse, TPayload>
        where TRequest : BusinessRuleRequest
        where TResponse : BusinessRuleResponse<TPayload>
    {
        TResponse Execute(TRequest request);
    }
}