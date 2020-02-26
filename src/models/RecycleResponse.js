const mongoose = require("mongoose");

const RecycleResponseSchema = new mongoose.Schema({
  request_id: {
    type: String,
    required: true
  },

  is_recyclable: {
    type: Boolean,
    required: true
  },

  container_material: {
    type: String,
    required: true
  },

  container_type: {
    type: String,
    required: true
  },

  council: {
    type: String,
    required: true
  },

  response_time: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = RecycleResponse = mongoose.model(
  "RecycleResponse",
  RecycleResponseSchema
);
