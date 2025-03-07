const express = require("express");

const userRoutes = require("./users");
const logsRoutes = require("./logs");

const router = express.Router({ mergeParams: true });

router.use("/users", userRoutes);
router.use("/logs", logsRoutes);

module.exports = router;
