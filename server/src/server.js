const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/wordReversalRoutes');

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log('RESTful API started on: ' + port);