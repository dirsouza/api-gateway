import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import resolvers from './resolvers';
import fs from 'fs';
import http from 'http';
import https from 'https';
import { config } from './config';

const apollo = new ApolloServer({
  typeDefs: importSchema(`${__dirname}/schemas/index.graphql`),
  resolvers
});

const app = express();
apollo.applyMiddleware({ app });

let server;
if (config.ssl) {
  server = https.createServer({
    key: fs.readFileSync(`${config.ssl_key}`),
    cert: fs.readFileSync(`${config.ssl_crt}`)
  }, app);
} else {
  server  = http.createServer(app);
}

export { server, apollo, config };


