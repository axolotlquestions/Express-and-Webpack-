//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var express = require('express');

var filmRouter = new express.Router();

// read
filmRouter.get('/', function(req, res){
  res.json(films);
});
// works

// create
filmRouter.post('/', function(req, res){
  films.push(req.body.film);
  res.json({data: films});
});

// read
filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]})
});
// works

// update
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

// delete
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
});
// works

module.exports = filmRouter;
