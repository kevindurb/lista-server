const pool = require('../pool');
const helpers = require('../helpers');

module.exports = {
  getTokenByAccessToken(accessToken) {
    return pool.query('select * from oauth_tokens where access_token = $1', [accessToken])
      .then(helpers.firstRow)
      .then(helpers.camelize);
  },
  getTokenByRefreshToken(refreshToken) {
    return pool.query('select * from oauth_tokens where refresh_token = $1', [refreshToken])
      .then(helpers.firstRow)
      .then(helpers.camelize);
  },
  getClientByIdAndSecret(id, secret) {
    return pool.query('select * from oauth_clients where id = $1 and secret = $2', [id, secret])
      .then(helpers.firstRow)
      .then(helpers.camelize);
  },
  insertNewToken(token) {
    return pool.query(
      `
      insert into oauth_tokens (
        client_id,
        user_id,
        access_token,
        access_token_expires_on,
        refresh_token,
        refresh_token_expires_on
      ) values ($1, $2)
      returning *
      `,
      [
        token.clientId,
        token.userId,
        token.accessToken,
        token.accessTokenExpiresOn,
        token.refreshToken,
        token.refreshTokenExpiresOn,
      ]
    ).then(helpers.firstRow)
      .then(helpers.camelize);
  }
};
