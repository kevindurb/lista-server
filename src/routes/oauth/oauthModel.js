var db = require('../../db');

module.exports.getAccessToken = (accessToken) => (
  db.getTokenByAccessToken(accessToken)
  .then((token) => (
    token ? {
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresOn,
      refreshToken: token.refreshToken,
      refreshTokenExpiresAt: token.refreshTokenExpiresOn,
      user: { id: token.userId },
    } : false
  ))
);

module.exports.getRefreshToken = (refreshToken) => (
  db.getTokenByRefreshToken(refreshToken)
  .then((token) => (
    token ? {
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresOn,
      refreshToken: token.refreshToken,
      refreshTokenExpiresAt: token.refreshTokenExpiresOn,
      user: { id: token.userId },
    } : false
  ))
);

module.exports.getClient = (id, secret) => (
  db.getClientByIdAndSecret(id, secret)
  .then((client) => (
    client ? {
      id: client.id,
      clientSecret: client.secret,
      redirectUri: client.redirectUri,
    } : false
  ))
);

// module.exports.getUser = 

// module.exports.getUser = function *(username, password) {
//   return pg.query('SELECT id FROM users WHERE username = $1 AND password = $2', [username, password])
//     .then(function(result) {
//       return result.rowCount ? result.rows[0] : false;
//     });
// };

/**
 * Save token.
 */

// module.exports.saveAccessToken = function *(token, client, user) {
//   return pg.query('INSERT INTO oauth_tokens(access_token, access_token_expires_on, client_id, refresh_token, refresh_token_expires_on, user_id) VALUES ($1, $2, $3, $4)', [
//     token.accessToken,
//     token.accessTokenExpiresOn,
//     client.id,
//     token.refreshToken,
//     token.refreshTokenExpiresOn,
//     user.id
//   ]).then(function(result) {
//     return result.rowCount ? result.rows[0] : false;
//   });
// };
