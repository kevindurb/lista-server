require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const log = require('debug')('lista:http');

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const REDIS_URL = process.env.REDIS_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    store: new RedisStore({ url: REDIS_URL }),
    secret: SESSION_SECRET
}));
app.use(require('./db').provider(MONGO_URL));
app.use(require('./routes'));

app.listen(PORT, function () {
  log('listening on port %s', PORT);
});
