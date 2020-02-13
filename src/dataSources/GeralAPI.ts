import { RESTDataSource }  from 'apollo-datasource-rest';

class GeralAPI extends RESTDataSource {

    constructor(config){
        super();
        this.baseURL =  `${config.microservicos}/ws-geral/api/`;
    }

    public async searchFilial(codigo) {
        const estado = await this.get('filialPemaza/filial', codigo);
        return estado;
    }
    
}

export default GeralAPI;