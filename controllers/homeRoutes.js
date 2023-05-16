const router = require("express").Router();

//import from models folder
const { Post, User, Comment } = require("../models");

//Import custom middleware for authentication
const withAuth = require("../utils/auth");

//retrieves all posts from the database

router.get("/", async (req, res) => {
  try {
    // Get all data
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template

    res.render("homepage", {
      posts,
      layouts: "main",
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// retrieves a single post with the given ID from the database
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      include: [User, { model: Comment, include: User }],
    });
    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("single-post", { post, logged_in: req.session.logged_in });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// checks if the user is already logged in, and if so, redirects the user to the dashboard
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  // If the user is not logged in, the route renders a template named "login".
  res.render("login");
});

// checks if the user is already logged in, and if so, redirects the user to the dashboard
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  // If the user is not logged in, the route renders a template named "signup".
  res.render("signup");
});

module.exports = router;
