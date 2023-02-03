const router = require('express').Router();
const { User, Team } = require('../Models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      // exclude the password and put names in ascending order
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    // map creates a new array called project and then .get that project from the server
    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    // homepage
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router;
