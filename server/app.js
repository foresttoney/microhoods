var Hapi = require('hapi');
var settings = require('./config/settings.js'); 
var routes = require('./config/routes.js');
var pg = require('pg');

// create server
var app = new Hapi.Server(settings.host, settings.port, settings.options); 

var conString = "postgres://username:password@localhost/database";

// var client = new pg.Client(settings.client);
client = new pg.Client(settings.client);
client.connect(function(err) {
  if (err) {
    console.log(err);
  }
});

app.route(routes.routeTable); 

module.exports = app;