require("dotenv").config();

const packageJson = require("../../package.json");

module.exports = {
  appName: process.env.APP_NAME || packageJson.name,
  appEnv: process.env.APP_ENV || "development",
  appVersion: packageJson.version,
  port: process.env.PORT || 3000,
};