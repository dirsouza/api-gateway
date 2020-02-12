import { IResolverContext } from '../../interfaces';
import { TResponse } from '../../types';

export const getUsers = async (_: any, args: any, { dataSources }: IResolverContext): Promise<any> => {
  const usersResponse: TResponse = await dataSources.userApi.getUsers();

  return usersResponse.data;
};