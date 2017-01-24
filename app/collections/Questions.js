var Question = require("../models/Question");

var Questions = Backbone.Collection.extend({
  url: 'http://shintech.ninja:8000/api/questions',
  model: Question
});

module.exports = Questions;
