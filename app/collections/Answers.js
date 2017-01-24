var Answer = require("../models/Answer");

var Answers = Backbone.Collection.extend({
  model: Answer,
  initialize: function(options){
    this.question = options.question;
    this.url = "http://shintech.ninja:8000/api/questions/" + this.question.get('_id') + "/answers";
  }  
});

module.exports = Answers;