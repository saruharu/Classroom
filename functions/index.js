const functions = require("firebase-functions");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use("/api/users", require("./routes/users/route"))
  .get("*", (_, res) =>
    res.status(404).json({ success: false, data: "Endpoint not found" })
  );

exports.app = functions.https.onRequest(app);
