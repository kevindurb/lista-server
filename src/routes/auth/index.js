const router = require('express').Router();
const thenSend = require('../../utils/thenSend');

router.post('/', thenSend(require('./login')));
router.delete('/', thenSend(require('./logout')));

module.exports = router;
