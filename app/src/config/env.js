require("dotenv").config();

module.exports = {
  appName: process.env.APP_NAME || "shipflow-api",
  appEnv: process.env.APP_ENV || "development",
  appVersion: process.env.APP_VERSION || "1.0.0",
  port: process.env.PORT || 3000,
};