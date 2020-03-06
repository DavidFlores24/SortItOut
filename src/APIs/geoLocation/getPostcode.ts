export {};

const { stringify } = require("qs");

const getPostcode = async ({ latitude, longitude }) => {
  const params = stringify(
    {
      latlng: `${latitude}, ${longitude}`,
      key: process.env.GOOGLE_MAPS_KEY
    },
    { encode: false }
  );

  const url = `${process.env.GOOGLE_MAPS_ENDPOINT}?${params}`;

  return fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })
    .then(res => {
      const results = res.results;
      const postcode = results[0].address_components.find(component =>
        component.types.includes("postal_code")
      );

      return postcode.long_name;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = getPostcode;
