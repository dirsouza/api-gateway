import { IResolverContext } from '../../interfaces';
import { CustomError } from '../../errors';


export const useFilial = async (_: any, {}, { dataSources }: IResolverContext): Promise<any> => {
   
    const response = await dataSources.geralApi.findFilial()

    if (!response.success) {
        throw new CustomError(response, 'filial_not_found');
    }

    return response.data;
}