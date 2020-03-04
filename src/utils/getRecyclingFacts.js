const neatCsv = require("neat-csv");
const fs = require("fs");
const path = require("path");

const getRecyclingFacts = async material => {
  // iterate through csv file
  const recyclingFactsCsv = path.join(
    __dirname,
    "..",
    "dataset",
    "recycling-facts.csv"
  );

  const dataset = await neatCsv(fs.createReadStream(recyclingFactsCsv));

  for (const entry of dataset) {
    if (!entry) return;

    // find material
    if (entry.Material === material) {
      let fact = "";
      while (!fact) {
        // create a random number generator (1 - 5)
        let factNumber = Math.floor(Math.random() * 6) + 1;

        // pick that fact
        fact = entry[`Fact ${factNumber}`];

        if (!fact) {
          factNumber--;
        }

        return fact;
      }
    }
  }

  return "";
};

module.exports = getRecyclingFacts;
