import { IResolverContext, IResponse } from '../../interfaces';
import { CustomError } from '../../errors';

export const searchLogin = async (
  _: any,
  { login },
  { dataSources }: IResolverContext,
): Promise<any> => {
  const usuario: IResponse = await dataSources.controleAcessoApi.sendLogin(login);

  if (!usuario.success) {
    throw new CustomError(usuario, 'users_not_found');
  }

  return usuario.data;
};

export const searchPassword = async (
  _: any,
  { login },
  { dataSources }: IResolverContext,
): Promise<any> => {
  const passwordExist: IResponse = await dataSources.controleAcessoApi.validatePassword(login);

  if (!passwordExist.success) {
    throw new CustomError(passwordExist, 'password_not_found');
  }

  return passwordExist.data;
};
