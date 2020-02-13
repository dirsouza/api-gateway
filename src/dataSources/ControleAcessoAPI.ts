import { RESTDataSource } from 'apollo-datasource-rest';
import { IResponse } from '../interfaces';

class ControleAcessoAPi extends RESTDataSource {
    constructor(config) {
        super();
        this.baseURL = `${config.services}/ws-controle-acesso/api`
    }

    public async sendLogin(login){

        try {

            const response = await this.get(`/login/find/login/sistema/${login.login}/${login.sistema}`);


            const usuario: IResponse = {
                success: true,
                data: response,
                message: "Resultado!"
            };

            if (!usuario) {
            throw new Error(response.message || response.error);
            }


            return {
                success: true,
                data: usuario.data
            }
            
        } catch (e) {

            return {
                success: false,
                error: e.extensions ? e.extensions.response.body.error : e.message
              }
            
        }

    }
}

export default ControleAcessoAPi;