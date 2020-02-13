import { RESTDataSource }  from 'apollo-datasource-rest';

class CatalogoAPI extends RESTDataSource {

   constructor(config){
      super()
      this.baseURL = `${config.services}/ws-catalogo/api`
   }

   public async searchProduto(pesqProduto) {

      try {
         
         const response = await this.get('/produto', pesqProduto);

         if (!response) {
            throw new Error("Product Not Found");
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
