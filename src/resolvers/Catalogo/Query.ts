import { IResolverContext, IResponse } from '../../interfaces';
import { CustomError } from '../../errors';

export const getProdutos = async (_: any, { pesqProduto }, { dataSources }: IResolverContext): Promise<any> => {
  
  const produtos: IResponse = await dataSources.catalogoApi.searchProduto(pesqProduto);
  
  if (!produtos.success) {
    throw new CustomError(produtos, 'users_not_found');
  }

  return produtos.data;
};