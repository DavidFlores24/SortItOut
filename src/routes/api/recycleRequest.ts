import express from "express";

import RecycleRequest from "../../models/RecycleRequest";
import processRequest from "../../utils/processRequest";

const router = express.Router();

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

export default router;
