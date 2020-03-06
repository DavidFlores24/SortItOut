export {};

import mongoose, { Schema } from "mongoose";
import { IContainerMaterial } from "./interfaces";

const ContainerMaterialSchema = new Schema({
  name: String,
  required: true,
  unique: true
});

export default mongoose.model<IContainerMaterial>(
  "ContainerMaterial",
  ContainerMaterialSchema
);
