const router = require('express').Router();
const { User, Team } = require('../Models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
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
