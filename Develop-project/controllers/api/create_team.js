const { User,Team }  = require('../../Models');

const router = require('express').Router();

router.post('/', async (req, res) => {
    // save both of these if there isn't already an email with the name address
    const new_user = await User.create({
       team_name: req.body.team_name,
    })
    return res.json(new_user) 
    
});

module.exports = router;