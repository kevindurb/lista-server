const router = require('express').Router();
const thenSend = require('../../utils/thenSend');

router.get('/', thenSend(require('./get')));
router.post('/', thenSend(require('./create')));

module.exports = router;
