require('dotenv/config');
const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Aplicattion running at port: ${PORT}`)
});


module.exports = app;