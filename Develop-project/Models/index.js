const router = require('express').Router();
const Team = require('./Team');
const User = require(`./User`);


User.belongsTo(Team,{
    foreignKey: `team_id`,
    onDelete: `cascade`
});
User.hasOne(Team,{
    foreignKey: `team_id`,
});
Team.hasMany(User, {
    
});
