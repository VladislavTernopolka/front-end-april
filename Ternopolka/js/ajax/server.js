var express = require('express');
var app = express(),
port = process.env.PORT || 4730;

app.use('/', express.static('public'));
app.listen(port);