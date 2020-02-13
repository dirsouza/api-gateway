export class CustomError extends Error {
  extensions: Record<string, any>;

  constructor(responseException: Record<string, any>, code: string = 'INTERNAL_SERVER_ERROR') {
    super(responseException.message || responseException.error);

    this.extensions = {
      code: code.toUpperCase(),
      ...responseException
    }
  }
}