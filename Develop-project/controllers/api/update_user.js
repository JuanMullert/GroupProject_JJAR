const { User,Team }  = require('../../Models');

const router = require('express').Router();

router.post('/change_tag', async (req, res) => {
    // save both of these if there isn't already an email with the name address
    const current_user = await User.findOne({
        where: { id: req.session.user_id }
    })
    console.log(current_user)
    const updated_user = await current_user.update({
        name: req.body.gamer_tag         
    });
    console.log(updated_user)
    return res.json(updated_user)
});

module.exports = router;