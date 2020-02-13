import { mocks, API } from '../__utils';

describe('Teste Usuarios DataSource', () => {
  it('return all users', async () => {
    const { userAPI } = API;
    userAPI.getUsers = mocks.get;

    mocks.get.mockReturnValue([{ id: '1', name: 'Teste', email: 'teste' }]);

    const res = await userAPI.getUsers();

    // @ts-ignore
    expect(res).toMatchSnapshot();
    expect(res).toEqual([{ id: '1', name: 'Teste', email: 'teste' }]);
  });

  it('return all users (Exception)', async () => {
    const { userAPI } = API;
    userAPI.getUsers = mocks.get;

    mocks.get.mockReturnValue({ errors: 'Users not found' });

    const res = await userAPI.getUsers();

    expect(res).toEqual({ errors: 'Users not found' });
  });
});
