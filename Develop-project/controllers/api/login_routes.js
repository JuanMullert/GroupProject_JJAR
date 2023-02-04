// login refers to this for a verification
const router = require('express').Router();
const { User,Team }  = require('../../Models');

//  TODO make sure this page returns you to the homepage
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(`are we working?`)
    
   
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

    // redirect to the homepage

  } 
  catch (err) {
    console.log(`the error is working!` + err)

    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
