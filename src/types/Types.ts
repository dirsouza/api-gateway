export type TConfig = {
  ssl: boolean | string,
  port: number | string,
  hostname: string,
  sslKey: string | null,
  sslCrt: string | null
}

export type TResponse = {
  success: boolean,
  data?: any,
  message?: string | any,
  error?: Record<string, any>
}

export type TMicroService = {
  legadoPmz: string | undefined
}