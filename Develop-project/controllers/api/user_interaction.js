const router = require('express').Router();
const { User, Team } = require('../../Models');

const team_exist = false;
const cant_join = false;

// 1. when a reqest comes here it should have a team name that it is looking for an trying to create
// 2. we should be creating two variables for this route to logically use: "create_team", and "existing_team"
// 3. an if statement is used to determine weather the api should create a "new_team" (front end (?))
// 4. if it creates a new team then the newly created team object should get returned. If not an error is observed and should spit back a message to the user.

// creates a team (needs to be hooked up to a button)
router.post(`/team_create`, async (req, res) => {
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
            User.team_owner = true;
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

// when a user types in a team it should make a request to this route.
// when it makes a request to this route it should check for existing teams
// if the team specified by the user exist, User's "team_id" should now be that team's id
// after User.team_id has been set, it should respond with the existing team.
router.post(`/join_team`, async (req, res) => {
    // might be case sensitive!!!
    const existing_team = await Team.findOne({
        where:{
            team_name: req.body.team_name
        }
    })
    if (existing_team) {
        existing_team.id = User.team_id
        return res.json(existing_team)
    }
    else {
        const cant_join = true
        return cant_join
    }
    return res.json(existing_team)
});

router.post(`/schedule_day`, async (req, res) => {
    switch(User.team_owner){
        case true:
            // Team.next_game = 
            // // use a for loop to generate these spaces



            // "_ _ / _ _ / _ _ _ _"
            // "_ _ : _ _"
            
            // results: 08/26/2023
            //          06:30

            // 1 = document.textbox.id
            // 2 = document.textbox.id 
            // 0 8/2 6/2 0 2 3


            // 1 = month1
            // 2 = month2
            // 3 = day1
            // 4 = day2
            // 5 = year
            // 6 = year
            // 7 = year
            // 8 = year

            // 9 = time1
            // 10 = time2
            // 11 = time3
            // 12 = time4
            break;
        case false:
            break;
    }
});

router.put(`/:name`, async (req, res) => {
    const updated_gamertag = await User.update({
        where: { name: req.params.name}
    })
    return res.json(updated_gamertag)
});


module.exports = router;