const {
  PredictionAPIClient
} = require("@azure/cognitiveservices-customvision-prediction");

const {
  PREDICTION_ENDPOINT,
  PREDICTION_KEY,
  PREDICTION_TYPE_ID,
  PREDICTION_TYPE_MODEL
} = process.env;

const getContainerType = async imageUrl => {
  const predictor = new PredictionAPIClient(
    PREDICTION_KEY,
    PREDICTION_ENDPOINT
  );

  const results = await predictor.classifyImageUrl(
    PREDICTION_TYPE_ID,
    PREDICTION_TYPE_MODEL,
    {
      url: imageUrl
    }
  );

  const { predictions } = results;

  predictions.sort((a, b) => (a.probability < b.probability ? 1 : -1));

  if (predictions[0].probability > 0.8) {
    return { type: predictions[0].tagName };
  }
};

module.exports = getContainerType;
