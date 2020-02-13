import { RESTDataSource } from 'apollo-datasource-rest';
import { IResponse } from '../interfaces';

class UserAPI extends RESTDataSource {
  constructor(config) {
    super();
    this.baseURL = `${config.legadoPmz}`;
  }

  public getUsers() {
    try {
      const users: IResponse = {
        success: true,
        data: [{ id: 1, name: 'Fulano', email: 'fulano@fulano.com.br' }],
        message: 'Resultado!',
      };

      if (!users.success) {
        throw new Error(users.message || users.error);
      }

      return {
        success: true,
        data: users.data,
      };
    } catch (e) {
      return {
        success: false,
        error: e.extensions ? e.extensions.response.body.error : e.message,
      };
    }
  }
}

export default UserAPI;
