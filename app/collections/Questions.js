var Questions = Backbone.Collection.extend({
  url: 'http://shintech.ninja:8000/api/questions'
});

module.exports = Questions;
