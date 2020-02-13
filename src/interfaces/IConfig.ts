export interface IConfig {
  ssl: boolean | string;
  port: number | string;
  hostname: string;
  sslKey?: string;
  sslCrt?: string;
}
