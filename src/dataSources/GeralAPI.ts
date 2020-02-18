import { RESTDataSource } from 'apollo-datasource-rest';

class GeralAPI extends RESTDataSource {
  constructor(config) {
    super();
    this.baseURL = `${config.services}/ws-geral/api/`;
  }

  public async searchFilial(codigo) {
    const estado = await this.get(`filialPemaza/filial?filial=${codigo}`);
    return estado;
  }

    public async searchFilial(codigo) {

        try {

            const response = await this.get(`filialPemaza/filial?filial=${codigo}`);

            if (!response) {
                throw new Error("Filial Not Found");
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

    public async getPessoaPemaza(codFuncionario){
        try {
            
        const response = await this.get(`pessoaPemaza/codfuncionario/${codFuncionario}`)
        
        if (!response) {
            throw new Error("Person Pmz Not Found");
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

export default GeralAPI;
