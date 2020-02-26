const express = require("express");
const router = express.Router();

const RecycleRequest = require("../../models/RecycleRequest");
const processRequest = require("../../utils/processRequest");

router.post("/", (req, res) => {
  RecycleRequest.create(req.body)
    .then(async request => {
      const response = await processRequest(request);

      res.status(200).send({ request, response });
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
});

module.exports = router;
