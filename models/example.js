module.exports = function(sequelize, DataTypes) {
  var Horoscope = sequelize.define("Horoscope", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
    type: DataTypes.DATE,
    allowNull: false 
  }
  });
  return Horoscope;
};
