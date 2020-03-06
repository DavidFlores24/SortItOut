export {};

import mongoose, { Schema } from "mongoose";
import { IRecycleResponse } from "./interfaces";

const RecycleResponseSchema = new Schema({
  request_id: {
    type: String,
    required: true
  },

  is_recyclable: {
    type: Boolean,
    required: true
  },

  container_material: {
    type: Schema.Types.ObjectId,
    ref: "container_material",
    required: true
  },

  container_type: {
    type: Schema.Types.ObjectId,
    ref: "container_type",
    required: true
  },

  council: {
    type: Schema.Types.ObjectId,
    ref: "council",
    required: true
  },

  response_time: {
    type: Date,
    required: true,
    default: Date.now()
  },

  fact: {
    type: String,
    required: true
  }
});

export default mongoose.model<IRecycleResponse>(
  "RecycleResponse",
  RecycleResponseSchema
);
