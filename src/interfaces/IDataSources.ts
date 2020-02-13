import * as dataSources from '../dataSources';

export interface IDataSources {
  userApi: dataSources.UserAPI,
  catalogoApi: dataSources.CatalogoAPI,
  geralApi: dataSources.GeralAPI,
  controleAcessoAPi: dataSources.ControleAcessoAPi,
  pessoaApi: dataSources.PessoaAPi
}