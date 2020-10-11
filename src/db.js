const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize({ dialect: "sqlite", storage: config.db.path });
exports.init = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected");
      // create the tables if not exist
      require("./models/user.model").init(sequelize);

      sequelize.sync();
    })
    .catch((err) => {
      console.log("Failed to connect to database", err);
    });
};

exports.db = sequelize;
