import { server, apollo, config } from './server';

server.listen({ url: config.hostname, port: config.port }, () =>
  console.log(
    `Listening at port http${config.ssl === 'true' ? 's' : ''}://${config.hostname}:${config.port}${
      apollo.graphqlPath
    }`,
  ),
);
