const express = require("express");
const fs = require("fs");
const app = express({});
const cors = require("cors");
const bodyparser = require("body-parser");
const Page = require("./webscraper.js");
const storyFormatter = require("./storyFormatter.js");
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile("./client/homepage.html", { root: __dirname });
});
app.post("/newreading", bodyparser.json(), async (req, res) => {
  console.log(req.body.url);
  const page = new Page(req.body.url);
  const storyText = await page.scrapePage();
  console.log(storyFormatter(storyText));

  res.sendStatus(200);
});

app.listen(2000, () => {
  console.log("server listening on port: 2000");
});
