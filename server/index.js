var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
var fs = require("fs");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded


var settings = JSON.parse(fs.readFileSync("Settings.json", 'utf8'));

function authenticate(username, password) {
    return (username == settings.username && password == settings.password);
};

app.get('/someGetMethod', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(app.data));
});

app.post('/login', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    var data = req.body;
    var username = data.username;
    var password = data.password;

    res.end(JSON.stringify(authenticate(username, password)));
});

app.use(express.static(settings.directoryToServe))

var server = app.listen(settings.httpPort, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port)
});


