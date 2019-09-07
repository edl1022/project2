module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    username:
    { type: DataTypes.STRING,
      allowNull: false
    },
    password:
    { type: DataTypes.STRING,
      allowNull: false
    },
    firstName:
    { type: DataTypes.STRING,
      allowNull: false
    },
    lastName:
    { type: DataTypes.STRING,
      allowNull: false
    },
    sign:
    { type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Account;
};
