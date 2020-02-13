import { IResolverContext, IResponse } from '../../interfaces';
import { CustomError } from '../../errors';

export const getUsers = async (_: any, args: any, { dataSources }: IResolverContext): Promise<any> => {
  const usersResponse: IResponse = await dataSources.userApi.getUsers();

  if (!usersResponse.success) {
    throw new CustomError(usersResponse, 'users_not_found');
  }

  return usersResponse.data;
};