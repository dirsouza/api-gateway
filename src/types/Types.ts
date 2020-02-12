export type TConfig = {
  ssl: boolean | string,
  port: number | string,
  hostname: string,
  sslKey: string | null,
  sslCrt: string | null
}