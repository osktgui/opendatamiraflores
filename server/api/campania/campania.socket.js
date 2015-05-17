/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Campania = require('./campania.model');

exports.register = function(socket) {
  Campania.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Campania.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('campania:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('campania:remove', doc);
}