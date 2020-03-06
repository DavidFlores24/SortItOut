export {};

const mapCouncil = require("./councilMapper");

const findCouncil = async postcode => {
  const url = "http://api.postcodes.io/postcodes/" + postcode.replace(" ", "");
  return fetch(url)
    .then(res => {
      if (res.status === 200) return res.json();
      else throw new Error(res.statusText);
    })
    .then(res => {
      return mapCouncil(res.result.admin_district);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = findCouncil;
