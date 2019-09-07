module.exports = function(sequelize, DataTypes) {
    var Likes = sequelize.define("Likes", {
        horoscope: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        userID: {
            type: DataTypes.INTEGER,
            model: "Users",
            key: "id"
        }
    });
    return Likes;
};