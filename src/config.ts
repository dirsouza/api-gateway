require('dotenv-flow').config();
import { TConfig } from './types';

const { SSL: ssl = false, PORT: port = 4000, HOSTNAME: hostname = 'localhost', SSL_KEY: sslKey = null, SSL_CRT: sslCrt = null } = process.env;

export const config: TConfig = {
  ssl,
  port,
  hostname,
  sslKey,
  sslCrt
};