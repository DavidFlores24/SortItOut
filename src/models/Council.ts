import mongoose, { Schema } from "mongoose";

import { ICouncil } from "./interfaces";

const CouncilSchema = new Schema({
  name: String
});

export default mongoose.model<ICouncil>("Council", CouncilSchema);
