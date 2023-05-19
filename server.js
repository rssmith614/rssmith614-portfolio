const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/project"));
app.use(require("./routes/workexp"));
// get driver connection
const dbo = require("./db/conn");

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./portfolio/build")));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./portfolio/build", "index.html"));
});
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(err => {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});