const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline
} = require("@azure/storage-blob");

const getStream = require("into-stream");
const multer = require("multer");
const express = require("express");

const router = express.Router();

const sharedKeyCredential = new StorageSharedKeyCredential(
  "fxhackathon",
  "31jhE/NqodYt7pTIsF7YKmkj5Wbsk+VAjIJI63WRR8c0ly6a/3o7s5EEpjV/YXZbeo9A2adR6l4nYvgYFppAYA=="
);

const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  `https://fxhackathon.blob.core.windows.net`,
  pipeline
);

const getBlobName = originalName => {
  // Use a random number to generate a unique file name,
  // removing "0." from the start of the string.
  const identifier = Math.random()
    .toString()
    .replace(/0\./, "");
  return `${identifier}-${originalName}`;
};

const upload = multer({ storage: multer.memoryStorage() }).single("file");

router.post("/create-image-url", upload, async (req, res) => {
  const blobName = getBlobName(req.file.originalname);
  const stream = getStream(req.file.buffer);
  const containerClient = blobServiceClient.getContainerClient("images");
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    await blockBlobClient.uploadStream(stream);
    const blob = {
      name: blobName,
      url: blockBlobClient.url
    };

    res.status(200).send(blob);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
