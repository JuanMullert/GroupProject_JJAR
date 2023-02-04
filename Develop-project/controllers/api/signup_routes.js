const { User,Team }  = require('../../Models');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', async (req, res) => {
    // save both of these if there isn't already an email with the name address
    const new_user = await User.create({
        name: 'gamertag',
        email: req.body.email,
        password: req.body.password,
    })
    return res.json(new_user) 
    
});

module.exports = router;