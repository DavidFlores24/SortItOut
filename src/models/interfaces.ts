import { Document } from "mongoose";

export interface IRecycleRequest extends Document {
  user_id: String;
  image_url: String;
  upload_date: Date;
  latitude: String;
  longitude: String;
}

export interface IContainerMaterial extends Document {
  name: String;
}

export interface IContainerType extends Document {
  name: String;
}

export interface ICouncil extends Document {
  name: String;
}

export interface IRecycleResponse extends Document {
  request_id: String;
  is_recyclable: Boolean;
  container_material: IContainerMaterial;
  container_type: IContainerType;
  council: ICouncil;
  response_time: Date;
  fact: String;
}

export interface IUrlRequest extends Document {
  file: String;
}
