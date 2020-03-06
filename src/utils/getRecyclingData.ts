import getRecyclingFacts from "./getRecyclingFacts";

const getRecyclingData = async ({ type, material }, councilData) => {
  let isRecyclable;

  if (type === "bottle" && material === "Mixed plastics") {
    isRecyclable = councilData.data["Plastic Bottles"] === "Yes";
  } else {
    isRecyclable = councilData.data[material] === "Yes";
  }
  const fact = await getRecyclingFacts(material);

  return { isRecyclable, type, material, council: councilData.council, fact };
};

export default getRecyclingData;
