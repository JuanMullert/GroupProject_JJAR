const router = require('express').Router();
const api_routes = require('./api');
const homepage_routes = require('./homepage_routes');

router.use('/', homepage_routes);
router.use('/api', api_routes);

module.exports = router;
