const express = require("express");

const appRoutes = require("./routes/appRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler")
const notFound = require("./middleware/notFound")
const app = express();


app.use(express.json());

app.use(logger);

app.use("/", appRoutes);

// 404 handler (must come after routes)
app.use(notFound);

// Global error handler (must be last)
app.use(errorHandler);

module.exports = app;