const router = require('express').Router();
const thenSend = require('../../utils/thenSend');

router.get('/:id', thenSend(require('./get')));

module.exports = router;
