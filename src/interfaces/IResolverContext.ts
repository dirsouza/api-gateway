import { IDataSources } from './IDataSources';

export interface IResolverContext {
  dataSources: IDataSources;
  login: string;
}