import mongoose, { Schema } from "mongoose";

import { IUrlRequest } from "./interfaces";

const UrlRequestSchema = new Schema({
  file: {
    type: String,
    required: true
  }
});

export default mongoose.model<IUrlRequest>("UrlRequest", UrlRequestSchema);
