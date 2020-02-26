const getImageInfo = require("../APIs/azure/getImageInfo");
const getCouncilData = require("../APIs/geoLocation/getCouncilData");

const processRequest = async request => {
  try {
    const response = await Promise.all([
      getImageInfo(request.image_url),
      getCouncilData(request)
    ]);
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = processRequest;
