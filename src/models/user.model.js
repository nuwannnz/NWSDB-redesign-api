const Sequelize = require("sequelize");

class User extends Sequelize.Model {}

exports.init = (sequelize) => {
  User.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      nic: {
        type: Sequelize.STRING,
      },
      mobile: {
        type: Sequelize.STRING,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
};
exports.User = User;
