'use strict';

var _ = require('lodash');
var Ciudadano = require('./ciudadano.model');

// Get list of ciudadanos
exports.index = function(req, res) {
  Ciudadano.find(function (err, ciudadanos) {
    if(err) { return handleError(res, err); }
    return res.json(200, ciudadanos);
  });
};

// Get a single ciudadano
exports.show = function(req, res) {
  Ciudadano.findById(req.params.id, function (err, ciudadano) {
    if(err) { return handleError(res, err); }
    if(!ciudadano) { return res.send(404); }
    return res.json(ciudadano);
  });
};

// Creates a new ciudadano in the DB.
exports.create = function(req, res) {
  Ciudadano.create(req.body, function(err, ciudadano) {
    if(err) { return handleError(res, err); }
    return res.json(201, ciudadano);
  });
};

// Updates an existing ciudadano in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ciudadano.findById(req.params.id, function (err, ciudadano) {
    if (err) { return handleError(res, err); }
    if(!ciudadano) { return res.send(404); }
    var updated = _.merge(ciudadano, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, ciudadano);
    });
  });
};

// Deletes a ciudadano from the DB.
exports.destroy = function(req, res) {
  Ciudadano.findById(req.params.id, function (err, ciudadano) {
    if(err) { return handleError(res, err); }
    if(!ciudadano) { return res.send(404); }
    ciudadano.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}