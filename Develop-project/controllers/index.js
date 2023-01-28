const router = require('express').Router();

const api_Routes = require('./api');
const homepage_routes = require('./homepage_routes');

router.use('/', homepage_routes);
router.use('/api', api_Routes);

module.exports = router;
