const mongoose = require("mongoose");

var Order = mongoose.model("Order", {
  productId: { type: String },
  productAmount: { type: String },
  userName: { type: String },

});

module.exports = { Order };
