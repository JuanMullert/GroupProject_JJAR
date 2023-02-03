const router = require('express').Router();
const login_routes = require(`./login_routes`);
const signup_routes = require(`./signup_routes`);
const delete_routes = require(`./delete_user`)
const update_routes = require(`./update_user`)

router.use('/signup', signup_routes);
router.use('/login', login_routes);
router.use('/delete', delete_routes);
router.use('/update', update_routes);


module.exports = router;
