import { gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { constructTestServer } from '../../__utils';

const GET_USERS = gql(`
  query getUsers {
    getUsers {
      id
      name
      email
    }
  }
`);

const mockGetUsersResponse = {
  success: {
    success: true,
    data: [{ id: '1', name: 'Teste', email: 'teste@teste.com.br' }],
  },
  errors: {
    success: false,
    error: 'Users not found',
  },
};

describe('Teste Usuarios Resolver', () => {
  it('return all users', async () => {
    const { server, userApi } = constructTestServer();

    // @ts-ignore
    userApi.get = jest.fn(() => mockGetUsersResponse.success);

    const { query } = createTestClient(server);

    const res = await query({
      query: GET_USERS,
    });

    // @ts-ignore
    expect(res).toMatchSnapshot();
  });
});
