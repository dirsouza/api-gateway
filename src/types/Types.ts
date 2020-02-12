export type TConfig = {
  ssl: boolean | string,
  port: number | string,
  hostname: string,
  ssl_key: string | null,
  ssl_crt: string | null
}