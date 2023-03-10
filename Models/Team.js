const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const generate_password = require(`../functions/code_generator`)

class Team extends Model {
}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        generated_password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        next_game: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
    },
    {
        hooks: {
            // Use the beforeCreate hook to work with data before a new object is created
            beforeCreate: async (Team) => {
              // In this case, we are taking the user's generated, and generating a password before adding it to the database.
              Team.generated_password = generate_password(15)
              return Team;
            },
        },
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'team', 
    }
    
);

module.exports = Team;
