export const getUsers = (_: any, args, cxt, info) => {
  const users = [
    { id: 1, name: 'Fulano', email: 'fulano@fulano.com' }
  ];

  return users;
};