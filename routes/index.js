const router = require('express').Router();

router.use('/lists', require('./lists'));
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));

module.exports = router;
