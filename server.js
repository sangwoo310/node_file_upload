const config = require('./config/config');

const express = require('express');
// const path = require('path');

const bodyParser = require('body-parser');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/view', express.static(__dirname + "/views"));

const server = app.listen(config.port, config.host, function(){
    console.log("Express server", config.host + ":" + config.port, " has started")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./router/router')(app);