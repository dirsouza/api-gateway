import { ApolloServer } from 'apollo-server';
import { DataSources } from 'apollo-server-core/dist/requestPipeline';
import { importSchema } from 'graphql-import';
import resolvers from '../../src/resolvers';

import { microService } from '../../src/config';
import * as dataSources from '../../src/dataSources';
import { IDataSources } from '../../src/interfaces';

export const constructTestServer = () => {
  const apis = {
    userApi: new dataSources.UserAPI(microService)
  };

  const server = new ApolloServer({
    typeDefs: importSchema(`${__dirname}/../../src/schemas/index.graphql`),
    resolvers,
    dataSources: (): DataSources<IDataSources> => apis,
    context: () => ({})
  });

  return { server, ...apis };
};
