var Marionette = require('marionette');
var style = require("./public/css/style.scss");
var Question = require("./models/Question");
var Questions = require("./collections/Questions");
var QuestionsView = require("./views/QuestionsView");

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    this.app = options.app;
    
    this.questions = new Questions();

    this.questions.fetch({
      success: function(request, response){
        console.log("Successfully fetched questions...")
      },
      error: function(err){
        console.log("Error: " + err);
      }
    });
    
    this.questionsView = new QuestionsView({ collection: this.questions });
    this.app.view.showChildView('main', this.questionsView);
    
  },
  
});

module.exports = Controller;
