const express = require("express");
const router = express.Router();

const fs = require("fs");
const cards = JSON.parse(fs.readFileSync("cards.json", "utf8"));

router.get("/", (req, res) => {
  res.send(cards);
});

router.get("/:id", (req, res) => {
  const card = filterCardsByJSONField("cardId", req.params.id)[0];
  res.send(card);
});

module.exports = router;

function filterCardsByJSONField(jsonField, value) {
  return cards.filter(function(obj) {
    return value == obj[jsonField];
  });
}
