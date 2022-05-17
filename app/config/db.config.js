module.exports = {
  HOST: "us-cdbr-east-05.cleardb.net",
  USER: "bf59474dc14912",
  PASSWORD: "f50e5ded",
  DB: "heroku_0c97a6025e04a09",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
