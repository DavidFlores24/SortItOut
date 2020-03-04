const mongoose = require("mongoose");

const UrlRequestSchema = new mongoose.Schema({
  file: {
    type: String,
    required: true
  }
});

module.exports = UrlRequest = mongoose.model("UrlRequest", UrlRequestSchema);
