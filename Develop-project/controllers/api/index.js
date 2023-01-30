const router = require('express').Router();
const user_routes = require('./user_routes');
const signup_routes = require(`./signup_routes`);

router.use('/users', user_routes);
<<<<<<< HEAD
router.use('/signup', signup_routes);

=======
router.use('/signup',signup_routes);
>>>>>>> 710d60419e70a8b9e3a15c2086a6cfd8426913d2
module.exports = router;
