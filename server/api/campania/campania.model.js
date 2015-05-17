'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Ciudadano = require('../ciudadano/ciudadano.model');

var CampaniaSchema = new Schema(
  {
    titulo: String,
    imagen: String,
    descripcion: String,
    fechainicio: Date,
    fechafinal: Date,
    meta: Number,
    activo: { type: Boolean, default: true },
    votos: [Ciudadano]
  }
);

module.exports = mongoose.model('Campania', CampaniaSchema);
