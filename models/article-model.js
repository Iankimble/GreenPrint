const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: {
    type: Array
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
  // writtneBy: {
  //   type: String,
  //   required: true
  // },
  // image: {
  //   type: Buffer,
  //   contentType: String
  // }
});

module.exports = mongoose.model("Article", articleSchema);
