const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  },
  eventTime: {
    type: String
  },
  description: {
    type: String,
    required: true
  }
  // image: {
  //   type: Buffer,
  //   contentType: String
  // }
});

module.exports = mongoose.model("Event", eventSchema);
