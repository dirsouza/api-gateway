import { RESTDataSource }  from 'apollo-datasource-rest';

class GeralAPI extends RESTDataSource {

    constructor(config){
        super();
        this.baseURL =  `${config.services}/ws-geral/api/`;
    }

    public async searchFilial(codigo) {
        const estado = await this.get(`filialPemaza/filial?filial=${codigo}`);
        return estado;
    }

    public async getPessoaPemaza(codFuncionario){

        const response = await this.get(`pessoaPemaza/codfuncionario/${codFuncionario}`)
        return response;
    }

    
}

export default GeralAPI;