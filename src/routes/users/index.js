const router = require('express').Router();
const thenSend = require('../../utils/thenSend');

router.post('/', thenSend(require('./create')));

module.exports = router;
