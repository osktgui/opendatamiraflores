'use strict';

var _ = require('lodash');
var Campania = require('./campania.model');

// Get list of campanias
exports.index = function(req, res) {
  Campania.find(function (err, campanias) {
    console.log(campanias);
    if(err) { return handleError(res, err); }
    return res.json(200, campanias);
  });
};

// Get a single campania
exports.show = function(req, res) {
  Campania.findById(req.params.id, function (err, campania) {
    if(err) { return handleError(res, err); }
    if(!campania) { return res.send(404); }
    return res.json(campania);
  });
};

// Creates a new campania in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  Campania.create(req.body, function(err, campania) {
    if(err) { return handleError(res, err); }
    return res.json(201, campania);
  });
};

// Updates an existing campania in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Campania.findById(req.params.id, function (err, campania) {
    if (err) { return handleError(res, err); }
    if(!campania) { return res.send(404); }
    var updated = _.merge(campania, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, campania);
    });
  });
};

// Deletes a campania from the DB.
exports.destroy = function(req, res) {
  Campania.findById(req.params.id, function (err, campania) {
    if(err) { return handleError(res, err); }
    if(!campania) { return res.send(404); }
    campania.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
