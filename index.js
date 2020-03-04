// dependencies
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// routes
const cloudUtils = require("./src/routes/api/cloudUtils");
const recycleRequest = require("./src/routes/api/recycleRequest");

// connect the DB
connectDB();

// configure server
app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());
app.use(express.json());

// define routes
app.use("/services", cloudUtils);
app.use("/recycle-requests", recycleRequest);

// default get
app.get("/", (req, res) => res.send("API for the Sort it Out chatbot"));

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
