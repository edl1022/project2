module.exports = function(sequelize, DataTypes) {
    var Horoscope = sequelize.define("Horoscope", {
      horoscope:
      { type: DataTypes.STRING,
        allowNull: false
      },
      date:
      { type: DataTypes.DATE,
        allowNull: false
      },
      userID: 
      {
          type: sequelize.INTEGER,
          references: "Account",
          referencesKey: "id"
      }
    });
    return Horoscope;
  };