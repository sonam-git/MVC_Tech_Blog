// Import the necessary models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Define the relationships between the models
// User has many posts through user_id
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// User has many comments through user_id
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Post belongs to user through user_id
Post.belongsTo(User, {
  foreignKey: "user_id",
});

//Post has many comments link post_id
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

//Comments belong to user through user_id
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//Comments belong to posts through post_id
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Post,
  Comment,
};
