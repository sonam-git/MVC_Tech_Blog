// Import the necessary modules and routes
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");
// Set up routes
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
// Export the router
module.exports = router;