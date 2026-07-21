const app = require("./app");
const config = require("./config/env");
const logger = require("./utils/logger");

const server = app.listen(config.port, () => {
  logger.info(
    `${config.appName} is running on port ${config.port} (${config.appEnv})`
  );
});


const shutdown = (signal) => {
  logger.info(`${signal} received. Shutting down gracefully...`);

  server.close(() => {
    logger.info("HTTP server closed successfully");
    process.exit(0);
  });
};


process.on("SIGTERM", () => {
  shutdown("SIGTERM");
});


process.on("SIGINT", () => {
  shutdown("SIGINT");
});