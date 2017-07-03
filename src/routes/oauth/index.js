const OAuthServer = require('express-oauth-server');
const router = require('express').Router();

const oauth = new OAuthServer({
  model: {},
});

router.get('/authorize', (req, res) => {
});

router.post('/authorize', oauth.authorize());
router.post('/token', oauth.token());

// TODO: build this out...
// #readTheDocs
// https://tech.zilverline.com/2017/03/17/nodejs-oauth2-provider
// https://github.com/oauthjs/express-oauth-server/blob/master/examples/redis/model.js
// https://github.com/oauthjs/express-oauth-server/tree/master/examples/postgresql
// https://oauth2-server.readthedocs.io/en/latest/index.html
