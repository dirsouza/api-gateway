import { RESTDataSource } from 'apollo-datasource-rest';

class PessoaAPI extends RESTDataSource {

    constructor(config){
        super()
        this.baseURL = `${config.services}/ws-pessoa/api/`
    }

    public async searchPessoaByLogin(codigo){

        const response = await this.get(`pessoa/${codigo}`)

        return response

    }

}


export default PessoaAPI;