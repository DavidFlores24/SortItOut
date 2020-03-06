import { IRecycleRequest } from "./interfaces";

import mongoose, { Schema } from "mongoose";

const RecycleRequestSchema = new Schema({
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

export default mongoose.model<IRecycleRequest>(
  "RecycleRequest",
  RecycleRequestSchema
);
