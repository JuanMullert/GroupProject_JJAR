const User = require('../../Models/user');

const router = require('express').Router();

router.delete('/:id', async (req, res) => {
    // save both of these if there isn't already an email with the name address
    const deleted_user = await User.destroy({
        where: { id: req.params.id }
    })
    return res.json(deleted_user)

});

module.exports = router;