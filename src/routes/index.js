const router = require('express').Router();

router.use('/lists', require('./lists'));
// router.use('/lists/:id/items', require('./items'));
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));

module.exports = router;
