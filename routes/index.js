const express = require('express');
const router = express.Router();

require('./lists')(router);

module.exports = router;
