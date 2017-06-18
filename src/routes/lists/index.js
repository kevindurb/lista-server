const router = require('express').Router();
const thenSend = require('../../utils/thenSend');

router.get('/', thenSend(require('./get')));
router.get('/:id/items', thenSend(require('./getItems')));
router.post('/', thenSend(require('./create')));

module.exports = router;
