const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//parse aplikasi
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil routes
var routes = require('./routes');
routes(app);

app.listen(3001, () => {
    console.log(`Server started on port`);
});