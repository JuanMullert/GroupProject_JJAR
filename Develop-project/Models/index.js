const Team = require('./Team');
const User = require(`./User`);


Team.hasMany(User, {
    foreignKey: `team_id`
});
User.belongsTo(Team,{
    foreignKey: `team_id`,
});


module.exports = {Team, User};