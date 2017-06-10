const express = require('express');

const app = express();

require('dotenv').config();

app.use(require('./db').provider);

app.use(require('./routes'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
