const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// This route retrieves all posts created by logged in user
router.get("/", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
// renders the homepage view with the posts data.
    res.render("dashboard-home", {
      posts,
      layout: "dashboard",
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route renders the new-post view to create a new post.
router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

//This route retrieves the post with the specified id and renders the edit-post view to edit the post.
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;