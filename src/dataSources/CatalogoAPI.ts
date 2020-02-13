import { RESTDataSource }  from 'apollo-datasource-rest';
import { IResponse } from '../interfaces';

class CatalogoAPI extends RESTDataSource {

  constructor(config){
      super()
      this.baseURL = `${config.services}/ws-controle-acesso/api`
  }

  public async searchProduto(pesqProduto) {

    try {
      
      const response = await this.get('/login/find/login/sistema/', pesqProduto);

      const produto: IResponse = {
        success: true,
        data: response,
        message: "Resultado!"
      };

      if (!produto) {
        throw new Error(response.message || response.error);
      }

      const produtosPage = {
        produtos: response.produtos.content,
        tags: response.tags,
        numeroElementos: response.produtos.numberOfElements,
        numeroPagina: response.produtos.number,
        totalElementos: response.produtos.totalElements,
        totalPaginas: response.produtos.totalPages,
      };
      
      return {
        success: true,
        data: produtosPage
      }

    } catch (e) {

      return {
        success: false,
        error: e.extensions ? e.extensions.response.body.error : e.message
      }

    }

  }

}
export default CatalogoAPI;