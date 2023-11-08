const dbConfig = require("../config/dbconfig");
const { Sequelize, DataTypes } = require("sequelize");

//sequelize is connection variable tat is going to be of big use future
//this has all the details to connect to mysql database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port : 3306, 
  // port : 7013,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

//if credentials are true and database has been created in mysql admin
//then block will get executed
//else catch
sequelize
//connect vayo vane tala ko execute garne
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!");
  })
  //milena vane
  .catch((err) => {
    console.log("Error" + err);
  });
//initially have empty rows in database so we can add some later
const db = {};

//database is provides Sequelize library functionality
db.Sequelize = Sequelize;
//database with connection
db.sequelize = sequelize;

// importing model files 
//giving them (connection, datatype to have(string varchar text long bigint more))
db.blogs = require("./blogmodel.js")(sequelize, DataTypes);
db.users = require("./userModel.js")(sequelize, DataTypes);


//incase weadd or delete column database data will be preserved if fallse
//data will all be deleted if not false
db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done");
});

module.exports = db;