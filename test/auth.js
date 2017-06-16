const helpers = require('../src/utils/testHelpers');
const login = require('../src/routes/auth/login');

define('#login', () => {
  it('should give success with valid user', () => {
    const req = helpers.requestWith({
      username: 'testuser',
    });
    req.db = {
    };
  });
});
