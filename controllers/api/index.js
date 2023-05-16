// Import the required modules
const router = require("express").Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

// Set up the routes
router.use("/users", userRoutes); // Routes for user-related functionality
router.use("/posts", postRoutes); // Routes for post-related functionality
router.use("/comments", commentRoutes); // Routes for comment-related functionality

// Export the router
module.exports = router;