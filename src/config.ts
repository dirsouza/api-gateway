import { TConfig } from './types';

const { SSL: ssl = false, PORT: port = 4000, HOSTNAME: hostname = 'localhost', SSL_KEY: ssl_key = null, SSL_CRT: ssl_crt = null } = process.env;

export const config: TConfig = {
  ssl,
  port,
  hostname,
  ssl_key,
  ssl_crt
};