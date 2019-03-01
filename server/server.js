const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use("/cards", require("./cardsController"));

app.listen(port, () => console.log(`Listening on port ${port}`));

