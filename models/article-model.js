const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const articleSchema = new mongoose.Schema({
  articleId: {
    type: ObjectId
  },
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
