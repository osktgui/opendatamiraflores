'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
	title: String,
	photoUrl: String,
	caption: String,
	credits: String
});

var GallerySchema = new Schema({
  title: String,
  slug: String,
  coverImageUrl: String,
  description: String,
  images: [ImageSchema],
  date: String
});

module.exports = mongoose.model('Gallery', GallerySchema);