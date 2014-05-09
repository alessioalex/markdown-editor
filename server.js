"use strict";

var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 7777);
