import { IResolverContext, IResponse } from "../../interfaces";
import { CustomError } from '../../errors';

export const searchPessoa = async (
  _: any,
  codigo,
  { dataSources }: IResolverContext,
): Promise<any> => {
  const response: IResponse = await dataSources.pessoaApi.searchPessoaByLogin(codigo.id);

  if (!response.success) {
    throw new CustomError(response, 'person_not_found');
  }

  return response.data;
};

export const searchPessoaPmz = async (
  _: any,
  codigo,
  { dataSources }: IResolverContext,
): Promise<any> => {
  const response: IResponse = await dataSources.geralApi.getPessoaPemaza(codigo.id);

  if (!response.success) {
    throw new CustomError(response, 'person_pmz_not_found');
  }

  return response.data;
};
