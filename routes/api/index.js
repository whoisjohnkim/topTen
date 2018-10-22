const router = require("express").Router();
const listRoutes = require("./List");

// List Routes
router.use("/lists", listRoutes);

module.exports = router;