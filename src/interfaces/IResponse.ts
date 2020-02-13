export interface IResponse {
  success: boolean,
  data?: any,
  message?: string | any,
  error?: Record<string, any>
}