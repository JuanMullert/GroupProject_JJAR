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

    console.log(`create team works`)
    // check if team name is already created (?)
    try {
        const existing_team = await Team.findOne({
            where: {
                team_name: req.body.team_name
            }
        })

        if (!existing_team) {
            const created_team = await Team.create({
                team_name: req.body.team_name
            });
            const current_user = await User.findOne({
                where: {
                    id: req.session.user_id
                }

            });
            const expansion_team = await Team.findOne({
                where: {
                    team_name: req.body.team_name
                }
            })

            console.log(expansion_team)

            const updated_user = await current_user.update({
                team_id: expansion_team.id,
                team_owner: true
            });

            console.log(`team is successfully created`)
            return res.json(updated_user)
        }
        else {
            // This should allow for front end response to existing team in database
            return res.json({ message: `This team name is already in use.` })
        }
    }
    catch (err) {
        // res.status(404).json(err);
        console.log(err);
    }
});

// 1.when a user types in a team it should make a request to this route.
// 2.when it makes a request to this route it should check for existing teams
// 3.if the team specified by the user exist, User's "team_id" should now be that team's id
// 4.after User.team_id has been set, it should respond with the existing team.
router.post(`/join_team`, async (req, res) => {
    console.log('joining a team')
    console.log(req.session.user_id)
    // might be case sensitive!!!
    const existing_team = await Team.findOne({
        where: {
            team_name: req.body.team_name
        }
    })
    console.log('server found a team')
    if (existing_team) {
        const current_user = await User.findOne({
            where: {
                id: req.session.user_id
            }
        });
        console.log(`Server has current user`)
        const updated_user = await current_user.update({
            team_id: existing_team.id,
            team_owner: false
        });

        console.log('Server has updated the user')
        console.log(updated_user)

        return res.json(updated_user);
    }
    else {
        return res.json({ message: `This team does not exist try joining another one.` })
    }
});

router.post('/change_tag', async (req, res) => {
    // save both of these if there isn't already an email with the name address
    const current_user = await User.findOne({
        where: { id: req.session.user_id }
    });

    console.log('current user was found')
    console.log(current_user)

    const updated_user = await current_user.update({
        name: req.body.gamer_tag
    });

    console.log('user gamer_tag has successfully been updated')
    console.log(updated_user)

    return res.json(updated_user)
});

router.get('/user_info', async (req, res) => {
    const info = []

    const current_user = await User.findOne({
        where: { id: req.session.user_id }
    });

    // current_team might need tweaking
    const current_team = await Team.findOne({
        where: { id: current_user.team_id }
    });

    let gamer_tag = current_user.name
    let team_name = current_team.team_name
    let team_password = current_team.generated_password

    info.push(gamer_tag, team_name, team_password)
    
    return info
})

router.post(`/schedule_day`, async (req, res) => {
    switch (User.team_owner) {
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

module.exports = router;