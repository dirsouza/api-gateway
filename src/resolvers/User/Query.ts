import { IResolverContext, IResponse } from '../../interfaces';

export const getUsers = async (_: any, args: any, { dataSources }: IResolverContext): Promise<any> => {
  const usersResponse: IResponse = await dataSources.userApi.getUsers();

  return usersResponse.data;
};