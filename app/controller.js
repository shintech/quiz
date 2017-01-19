var Marionette = require('marionette');
var style = require("./public/css/style.scss");
var Questions = require("./collections").questions;
var QuestionsView = require("./views").questionsView;

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    this.app = options.app;
    
    var questions = new Questions();
    var questionsView = new QuestionsView({ collection: questions });
    
    questions.fetch({
      success: function(request, response){
        console.log("Successfully fetched questions...")
      },
      error: function(err){
        console.log("Error: " + err);
      }
    });
    
    this.options.questionsView = questionsView;
    this.app.view.showChildView('main', this.options.questionsView);
    
  }
  
});

module.exports = Controller;
