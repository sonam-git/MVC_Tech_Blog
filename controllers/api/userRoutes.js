const router = require("express").Router();
const { User } = require("../../models");

// Create new user  in the database.
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // If the user is successfully created, the code sets the user's ID and a logged_in flag in the session data, saves the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// logs a user in by checking the supplied credentials against the database
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    // if the username and password is not valid it returns
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again" });
      return;
    }
    // If the password is valid, the code sets the user's ID, username, and logged_in flag in the session data, saves the session,
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      console.log("user", userData);
      res.status(200).json({ user: userData, message: "You are logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// logs a user out by destroying their session
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log(err);
    res.status(404).end();
  }
});

module.exports = router;
