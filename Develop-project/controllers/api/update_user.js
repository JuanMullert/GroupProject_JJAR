const { User,Team }  = require('../../Models');

const router = require('express').Router();

router.put('/:id', async (req, res) => {
    // save both of these if there isn't already an email with the name address
    const updated_user = await User.update({
        where: { id: req.params.id }
    })
    return res.json(updated_user)

});

module.exports = router;