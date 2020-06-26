'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre démo du mspr-i1-tpre716-2020\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);