var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: true })

var root = process.cwd();
var app = express();

port = 8080;

app.set('view engine', 'ejs');
app.use('/', express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile('platform.html', {root});
});

app.get('/menu', function (req, res) {
    res.sendFile('/menu.html', {root});
});

app.listen(port, function(){
  console.log('Listening to port ' + port + ' ...');
});
