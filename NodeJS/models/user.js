const mongoose = require("mongoose");

var User = mongoose.model("User", {
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String },
  location: { type: String },
  profilePic: { type: String },
});

module.exports = { User };
