// FOR LOCAL ENVIRONMENT
//for commit 1
//for commit 2
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
