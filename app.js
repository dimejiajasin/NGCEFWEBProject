/**
 * Created by Dimeji on 8/2/2016.
 */

var express = require('express');
var app = express();
var port = 5000;

app.get('/', function (req, res) {
    res.send('Hello there Dimeji');
});


app.listen(port, function (err) {
    console.log('Listening on port '+port);
});


