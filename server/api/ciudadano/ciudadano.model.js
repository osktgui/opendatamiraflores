'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CiudadanoSchema = new Schema({
  	latitud: String,
    longitud: String,
    idCampania: String,
    numeroCelular: Date
});

module.exports = mongoose.model('Ciudadano', CiudadanoSchema);