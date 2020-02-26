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

  latitude: {
    type: String,
    required: true
  },

  longitude: {
    type: String,
    required: true
  }
});

module.exports = RecycleRequest = mongoose.model(
  "RecycleRequest",
  RecycleRequestSchema
);
