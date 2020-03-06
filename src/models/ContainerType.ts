import mongoose, { Schema } from "mongoose";

import { IContainerType } from "./interfaces";

const ContainerTypeSchema = new Schema({
  name: String,
  required: true
});

export default mongoose.model<IContainerType>(
  "ContainerType",
  ContainerTypeSchema
);
