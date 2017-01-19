var Question = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: "http://shintech.ninja:8000/api/questions/"
});

module.exports = Question;