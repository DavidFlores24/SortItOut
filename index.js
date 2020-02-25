const express = require("express");
// const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const cloudUtils = require("./src/routes/api/cloudUtils");
// connectDB();
app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/services", cloudUtils);
app.get("/", (req, res) => res.send("hello world"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
