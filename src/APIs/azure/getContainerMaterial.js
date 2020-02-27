const {
  PredictionAPIClient
} = require("@azure/cognitiveservices-customvision-prediction");

const {
  PREDICTION_ENDPOINT,
  PREDICTION_KEY,
  PREDICTION_MATERIAL_ID,
  PREDICTION_MATERIAL_MODEL
} = process.env;

const getContainerMaterial = async (imageUrl, containerType) => {
  const predictor = new PredictionAPIClient(
    PREDICTION_KEY,
    PREDICTION_ENDPOINT
  );

  const results = await predictor.classifyImageUrl(
    PREDICTION_MATERIAL_ID,
    PREDICTION_MATERIAL_MODEL,
    { url: imageUrl }
  );

  const { predictions } = results;

  // sort results by probability
  predictions.sort((a, b) => (a.probability < b.probability ? 1 : -1));

  if (predictions[0].probability > 0.8) {
    return { material: predictions[0].tagName };
  } else {
    throw new Error(
      "Could not determine container material. Please take another picture"
    );
  }
};

module.exports = getContainerMaterial;
