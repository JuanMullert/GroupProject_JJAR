const router = require('express').Router();
const login_routes = require('./login_routes');
const signup_routes = require(`./signup_routes`);

router.use('/signup', signup_routes);
router.use('/login', login_routes);

module.exports = router;
