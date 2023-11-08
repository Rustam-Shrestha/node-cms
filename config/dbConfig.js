// FOR LOCAL ENVIRONMENT
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "nodesession",
    dialect: "mysql",
    // concurrency and request handling kati garne dinxa
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };