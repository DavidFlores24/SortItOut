const express = require("express");
// const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const cloudUtils = require("./src/routes/api/cloudUtils");
// connectDB();
const recycleRequest = require("./src/routes/api/recycleRequest");
app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/services", cloudUtils);
app.get("/", (req, res) => res.send("hello world"));
app.use("/recycle-requests", recycleRequest);

app.listen(3000, () => {
  console.log("Server running on port 3000");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
