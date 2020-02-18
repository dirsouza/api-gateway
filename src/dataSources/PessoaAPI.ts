import { RESTDataSource } from 'apollo-datasource-rest';

class PessoaAPI extends RESTDataSource {

    constructor(config){
        super()
        this.baseURL = `${config.services}/ws-pessoa/api/`
    }

    public async searchPessoaByLogin(codigo){

        try {
            
            const response = await this.get(`pessoa/${codigo}`)

            if (!response) {
                throw new Error("Person Not Found");
            }

            return {
                success: true,
                data: response
            }

        } catch (e) {

            return {
                success: false,
                error: e.extensions ? e.extensions.response.body.error : e.message
            }
        }
    }
}


export default PessoaAPI;