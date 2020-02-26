const getImageInfo = require("../APIs/azure/getImageInfo");
const getPostcode = require("../APIs/geoLocation/getPostcode");

const processRequest = async request => {
  try {
    const response = await Promise.all([
      getImageInfo(request.image_url),
      getPostcode(request)
    ]);
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = processRequest;
