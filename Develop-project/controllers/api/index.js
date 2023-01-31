const router = require('express').Router();
const user_routes = require('./login_routes');
const signup_routes = require(`./signup_routes`);

router.use('/signup', signup_routes);
router.use('/users', user_routes);

module.exports = router;
