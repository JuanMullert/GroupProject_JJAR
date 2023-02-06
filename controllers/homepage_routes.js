const router = require('express').Router();
const { User, Team } = require('../Models');


router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.render('homepage')
    }
    else{
    res.render('login')
    }
  }
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
