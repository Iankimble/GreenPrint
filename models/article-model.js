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
  }
  //   image: {
  //     type: Buffer,
  //     contentType: String
  //   },
  //   createdOn: {
  //     type: Date,
  //     default: Date.now
  //   },
  //   writtenBy: {
  //     type: String,
  //     required: true
  //   }
});

module.exports = mongoose.model("Article", articleSchema);
