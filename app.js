/**
 * Created by Dimeji on 8/2/2016.
 */

var express = require('express');
var app = express();
var engines = require('consolidate');
var port = 5000;

app.engine('html', engines.nunjucks);
app.set('view engine', 'html')
app.use(express.static('public'));
app.set('views', __dirname + '/src/views');


app.get('/', function (req, res) {
    res.render('index');
});


app.listen(port, function (err) {
    console.log('Listening on port '+port);
});


