import { config } from '../../src/config';
import UserAPI from '../../src/dataSources/UserAPI';

export const mocks = {
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
  put: jest.fn(),
};

export const API = {
  userAPI: new UserAPI(config),
};
