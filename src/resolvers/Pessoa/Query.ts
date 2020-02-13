import { IResolverContext, IResponse } from '../../interfaces';

export const searchPessoa = async (_: any, codigo, { dataSources }: IResolverContext): Promise<any> => {

    const response = dataSources.pessoaApi.searchPessoaByLogin(codigo.id)

    return response
}


export const searchPessoaPmz = async (_: any, codigo, { dataSources }: IResolverContext): Promise<any> => {
    const response = dataSources.geralApi.getPessoaPemaza(codigo.id)

    return response
}
