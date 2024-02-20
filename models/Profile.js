const { db, Model, DataTypes } = require('../db/connection.js');

class Profile extends Model{};

Profile.init({
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'profile'
});

module.exports = Profile;