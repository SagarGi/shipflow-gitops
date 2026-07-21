const express = require("express");

const appRoutes = require("./routes/appRoutes");

const app = express();

app.use(express.json());

// Register routes
app.use("/", appRoutes);

module.exports = app;