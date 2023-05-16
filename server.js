// Importing required modules and dependencies
const express = require("express");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

// Creating express app and setting port
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// Setting up session object with secret, cookie, and store
const sess = {
  secret: "Super secret secret",
  cookie: {maxAge: 1000*60*5,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Using session middleware with session object
app.use(session(sess));

// Parsing incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORTANT FOR PUBLIC FOLDERS - serving static files such as images from public directory
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Using routes from controller
app.use(routes);

// Syncing sequelize models with database and starting server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`The server is listenening on ${PORT} http://localhost:${PORT}`));
});