const express = require('express');
const bodyParser = require('body-parser');

const password = require("./utils");

const app = express();
app.use(bodyParser.json());

app.use("/api/utils/", password);

const PORT= 5000;
app.listen(PORT, () => console.log(`Servr started on ${PORT}`));