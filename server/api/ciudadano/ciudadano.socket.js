/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Ciudadano = require('./ciudadano.model');

exports.register = function(socket) {
  Ciudadano.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Ciudadano.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('ciudadano:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('ciudadano:remove', doc);
}