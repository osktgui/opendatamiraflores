'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CampaniaSchema = new Schema(
  {
    titulo: String,
    info: String
  },
  {
    imagen: String,
    info: String
  },
  {
    descripcion: String,
    info: String
  },
  {
    fechainicio: String,
    info: String
  },
  {
    fechafinal: String,
    info: String
  },
  {
    meta: String,
    info: String
  }
);

module.exports = mongoose.model('Campania', CampaniaSchema);
