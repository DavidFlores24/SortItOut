const getContainerType = require("./getContainerType");
const getContainerMaterial = require("./getContainerMaterial");
const mapMaterial = require("./materialMapper");

const getImageInfo = async imageUrl => {
  const containerType = await getContainerType(imageUrl);
  const containerMaterial = await getContainerMaterial(imageUrl, containerType);

  const imageInfo = {
    type: containerType.type,
    material: mapMaterial(containerMaterial.material)
  };

  return imageInfo;
};

export default getImageInfo;
