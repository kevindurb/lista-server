const router = require('express').Router();
const thenSend = require('../../utils/thenSend');

router.post('/', thenSend(require('./login')));

module.exports = router;
