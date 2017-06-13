const router = require('express').Router();

router.post('/', require('./post'));
router.delete('/', require('./delete'));
router.get('/', require('./get'));

module.exports = router;
