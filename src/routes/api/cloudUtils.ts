import {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline
} from "@azure/storage-blob";

import express from "express";
import base64 from "base64-img";

import UrlRequest from "../../models/UrlRequest";

const router = express.Router();

const sharedKeyCredential = new StorageSharedKeyCredential(
  process.env.CLOUD_ACCOUNT_NAME,
  process.env.CLOUD_ACCOUNT_KEY
);

const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  `https://${process.env.CLOUD_ACCOUNT_NAME}.blob.core.windows.net`,
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

router.post("/create-image-url", (req, res) => {
  UrlRequest.create(req.body)
    .then(async req => {
      const { file } = req;

      try {
        let image = "";
        const blobName = getBlobName("test.jpg");
        const containerClient = blobServiceClient.getContainerClient("images");
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        base64.img(file, __dirname, "file1", async (err, filePath) => {
          image = filePath;
          await blockBlobClient.uploadFile(image);
          const blob = {
            name: blobName,
            url: blockBlobClient.url
          };
          res.status(200).send(blob);
        });
      } catch (err) {
        throw new Error(err);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err.message);
    });
});

export default router;
