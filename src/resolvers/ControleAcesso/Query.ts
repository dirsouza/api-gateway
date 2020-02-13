import { IResolverContext, IResponse } from '../../interfaces';
import { CustomError } from '../../errors';

export const searchLogin = async (_: any, { login }, { dataSources }: IResolverContext): Promise<any> => { 

    const usuario: IResponse = await dataSources.controleAcessoAPi.sendLogin(login)

    if (!usuario.success) {
        throw new CustomError(usuario, 'users_not_found');
    }

    return usuario.data;
    
}