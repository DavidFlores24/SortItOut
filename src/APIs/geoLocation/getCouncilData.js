const neatCsv = require("neat-csv");
const fs = require("fs");
const path = require("path");

const getPostcode = require("./getPostcode");
const findCouncil = require("./findCouncil");

const getCouncilData = async request => {
  const councilName = await getPostcode(request).then(async postcode => {
    return await findCouncil(postcode);
  });

  if (!councilName) {
    throw new Error("Council is outside of London.");
  }

  const result = findDataOnDataset(councilName);
  return { data: result, council: councilName };
};

const findDataOnDataset = async councilName => {
  const file = path.join(__dirname, "..", "..", "dataset", "council-data.csv");
  const dataset = await neatCsv(fs.createReadStream(file));

  const councilData = getData(councilName, dataset);
  return councilData;
};

const getData = (councilName, dataset) => {
  for (var i = 2; i < dataset.length; i++) {
    if (dataset[i].LocalAuthority === councilName) {
      return dataset[i];
    }
  }
};

module.exports = getCouncilData;
