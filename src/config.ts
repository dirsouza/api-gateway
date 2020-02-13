require('dotenv-flow').config();
import { IConfig, IMicroService } from './interfaces';

export const config: IConfig = {
  ssl: process.env.SSL || false,
  port: process.env.PORT || 4000,
  hostname: process.env.HOSTNAME || 'localhost',
  sslKey: process.env.SSL_KEY || undefined,
  sslCrt: process.env.SSL_CRT || undefined
};

export const microService: IMicroService = {
  legadoPmz: process.env.LEGADO_PMZ || undefined,
  services: process.env.CATALOGO || undefined
};