const router = require('express').Router();
const { User, Team } = require('../../Models');

// 1. when a reqest comes here it should have a team name that it is looking for an trying to create
// 2. we should be creating two variables for this route to logically use: "create_team", and "existing_team"
// 3. an if statement is used to determine weather the api should create a "new_team" (front end (?))
// 4. if it creates a new team then the newly created team object should get returned. If not an error is observed and should spit back a message to the user.

// creates a team (needs to be hooked up to a button)
router.post(`/`, async (req, res) => {
    // check if team name is already created (?)
    try {
        const existing_team = await Team.findOne({
            where: {
                team_name: req.body.team_name
            }
        })
        console.log(existing_team)
        console.log(`existing_team is finding something.`)
        
        if (!existing_team) {
            const create_team = await Team.create({
                team_name: req.body.team_name
            })
            return res.json(create_team)
        }
        else {
            // This should allow for front end response to existing team in database
           const team_exist = true
           return team_exist
        }
    }
    catch (err) {
        res.status(404).json(err);
        console.log(err);
    }
});

// router.post(`/`, async (req, res) => {
//     const join_team = await Team.findOne({
//         where: {
//             team_name: req.body.team_name
//         }
//     })
//     return res.json(join_team)
// });

module.exports = router;