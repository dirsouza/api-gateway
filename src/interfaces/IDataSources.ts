import * as dataSources from '../dataSources';

export interface IDataSources {
  userApi: dataSources.UserAPI;
  catalogoApi: dataSources.CatalogoAPI;
  geralApi: dataSources.GeralAPI;
  controleAcessoApi: dataSources.ControleAcessoAPI;
  pessoaApi: dataSources.PessoaAPI;
}
