module.exports = function(sequelize, DataTypes) {
    var Likes = sequelize.define("Likes", {
        horoscope: {
            type: DataTypes.STRING(6000),
            allowNull: false
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        // date: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // } 
    });
    console.log(Likes)
    return Likes;
};

