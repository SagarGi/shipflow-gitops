const config = require("../config/env");

const getAppInfo = (req, res) => {
  res.status(200).json({
    service: config.appName,
    version: config.appVersion,
    environment: config.appEnv,
    status: "running",
  });
};

const getHealth = (req, res) => {
  res.status(200).json({
    status: "UP",
  });
};

const getVersion = (req, res) => {
  res.status(200).json({
    version: config.appVersion,
  });
};

module.exports = {
  getAppInfo,
  getHealth,
  getVersion
};