require('dotenv-flow').config();
import { TConfig, TMicroService } from './types';

const { SSL: ssl = false, PORT: port = 4000, HOSTNAME: hostname = 'localhost', SSL_KEY: sslKey = null, SSL_CRT: sslCrt = null } = process.env;

export const config: TConfig = {
  ssl,
  port,
  hostname,
  sslKey,
  sslCrt
};

const { LEGADO_PMZ: legadoPmz } = process.env;

export const microService: TMicroService = {
  legadoPmz
};