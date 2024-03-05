import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

// this decorator returns the user object from the context.
// it saves the user object to the context when the client requests with token in header which is responsed
// when client requests login.
// so we can assume that this user is authenticated.
export const AuthUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    const user = gqlContext['user']?.user;
    return user;
  },
);
