import getImageInfo from "../APIs/azure/getImageInfo";
import getCouncilData from "../APIs/geoLocation/getCouncilData";
import getRecylingData from "./getRecyclingData";
import RecycleResponse from "../models/RecycleResponse";

const processRequest = async request => {
  console.log("processing request");
  try {
    const info = await Promise.all([
      getImageInfo(request.image_url),
      getCouncilData(request)
    ]);

    const recyclingData = await getRecylingData(info[0], info[1]);

    const response = {
      request_id: request._id,
      is_recyclable: recyclingData.isRecyclable,
      container_material: recyclingData.material,
      container_type: recyclingData.type,
      council: recyclingData.council,
      fact: recyclingData.fact
    };

    console.log("sending response");
    RecycleResponse.create(response);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default processRequest;
