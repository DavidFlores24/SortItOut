const getRecyclingData = ({ type, material }, councilData) => {
  let isRecyclable;

  if (type === "bottle" && material === "Mixed plastics") {
    isRecyclable = !!councilData.data["Plastic Bottles"];
  } else {
    isRecyclable = !!councilData.data[material];
  }

  return { isRecyclable, type, material, council: councilData.council };
};

module.exports = getRecyclingData;
