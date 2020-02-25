const mongoose = require("mongoose");

const RecycleRequestSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },

  image_url: {
    type: String,
    required: true
  },

  upload_date: {
    type: Date,
    default: Date.now(),
    required: true
  },

  easting: {
    type: String,
    required: true
  },

  northing: {
    type: String,
    required: true
  }
});

module.exports = RecycleRequest = mongoose.model(
  "RecycleRequest",
  RecycleRequestSchema
);
