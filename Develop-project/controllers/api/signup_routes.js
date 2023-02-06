const { User,Team }  = require('../../Models');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/new_user', async (req, res) => {
    // save both of these if there isn't already an email with the name address
    const existing_user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if(!existing_user){
        const new_user = await User.create({
            name: 'gamertag',
            email: req.body.email,
            password: req.body.password,
        })
    }
    else{
        return res.json({ message: `This email is already in use.`})
    }
});

module.exports = router;