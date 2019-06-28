const express = require("express");
const path = require("path"); 
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.use(express.static(path.join(__dirname, "public")));
app.listen(port);

module.export = app