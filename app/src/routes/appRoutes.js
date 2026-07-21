const express = require("express");
const router = express.Router();

const {
  getAppInfo,
  getHealth,
  getVersion
} = require("../controllers/appController");

router.get("/", getAppInfo);
router.get("/health", getHealth);
router.get("/version", getVersion);

module.exports = router;