require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const log = require('debug')('lista:http');
const helmet = require('helmet');

const HTTP_PORT = process.env.HTTP_PORT;
const REDIS_URL = process.env.REDIS_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    store: new RedisStore({ url: REDIS_URL }),
    secret: SESSION_SECRET
}));
app.use(require('./routes'));

app.listen(HTTP_PORT, function () {
  log('listening on port %s', HTTP_PORT);
});
