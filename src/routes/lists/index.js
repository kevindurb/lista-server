const router = require('express').Router();
const thenSend = require('../../utils/thenSend');

router.get('/', thenSend(require('./get')));
router.post('/', thenSend(require('./create')));
router.get('/:id/items', thenSend(require('./getItems')));
router.post('/:id/items', thenSend(require('./createItem')));

module.exports = router;
