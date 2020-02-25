const express = require("express");
const router = express.Router();

const RecycleRequest = require("../../models/RecycleRequest");

router.post("/", (req, res) => {
  RecycleRequest.create(req.body)
    .then(request => {
      res.status(200).send(request);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
});

module.exports = router;
