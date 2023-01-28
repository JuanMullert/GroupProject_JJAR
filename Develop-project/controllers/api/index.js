const router = require('express').Router();
const user_routes = require('./user_routes');

router.use('/users', user_routes);
router.use('/signup',signup_routes);
module.exports = router;
