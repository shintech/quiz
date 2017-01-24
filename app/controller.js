var Marionette = require('marionette');
var style = require("./public/css/style.scss");
var Questions = require("./collections/Questions");
var QuestionsView = require("./views/QuestionsView");

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    this.app = options.app;
    
    this.questions = new Questions();

    this.questionsView = new QuestionsView({ collection: this.questions });
    this.app.view.showChildView('main', this.questionsView);
    
  },
  
});

module.exports = Controller;
