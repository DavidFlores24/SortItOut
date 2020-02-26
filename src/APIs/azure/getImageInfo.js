const {
  PredictionAPIClient
} = require("@azure/cognitiveservices-customvision-prediction");

const {
  PREDICTION_ENDPOINT,
  PREDICTION_KEY,
  PREDICTION_PROJECT_ID
} = process.env;

async function getImageInfo(imageUrl) {
  const predictor = new PredictionAPIClient(
    PREDICTION_KEY,
    PREDICTION_ENDPOINT
  );

  const results = await predictor.classifyImageUrl(
    PREDICTION_PROJECT_ID,
    "Iteration1",
    { url: imageUrl }
  );

  const { predictions } = results;

  // sort results by probability
  predictions.sort((a, b) => (a.probability < b.probability ? 1 : -1));

  if (predictions[0].probability > 0.8) {
    return { material: predictions[0].tagName };
  }
}

module.exports = getImageInfo;
