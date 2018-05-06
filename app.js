// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();
const port = process.env.PORT || 8080;

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://hoai:hoai@ds215910.mlab.com:15910/firstdemoapp';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);



app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
