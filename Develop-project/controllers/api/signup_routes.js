const router = require('express').Router();

router.post('/signup'), async (req, res) => {
    // save both of these if there isn't already an email with the name address
    preferred_email = req.body.preferred_email
    preferred_password = req.body.preferred_password
    
};
