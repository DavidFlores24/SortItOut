const express = require("express");
const router = express.Router();

const RecycleRequest = require("../../models/RecycleRequest");
const getImageInfo = require("../../APIs/azure/getImageInfo");

router.post("/", (req, res) => {
  RecycleRequest.create(req.body)
    .then(async request => {
      const material = await getImageInfo(request.image_url);
      res.status(200).send({ request, material });
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
});

module.exports = router;
