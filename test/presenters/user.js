const { expect } = require('chai');
const userPresenter = require('../../src/presenters/user');

describe('#userPresenter', () => {
  it('should pass through a clean user', () => {
    const user = {
      username: 'test',
    };
    expect(userPresenter(user)).to.have.property('username', 'test');
  });

  it('should remove params that are not in schema', () => {
    const user = {
      id: 'testid',
      username: 'test',
      firstName: null,
      password: 'testpassword',
      passwordDigest: {},
    };
    expect(userPresenter(user)).to.not.have.property('passwordDigest');
  });
});
