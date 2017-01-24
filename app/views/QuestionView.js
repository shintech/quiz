var Answers = require("../collections/Answers");
var AnswersView = require("./AnswersView");

var QuestionView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'question-view',
  template: require("../templates/question-view-template.html"),
  initialize: function(){
    this.collection = new Answers({ question: this.model});
    this.collection.fetch();
  },
  regions: {
    answers: {
      el: '.answer-view',
      replaceElement: true
    }
  },
  onRender: function(){
    var answersView = new AnswersView({ collection: this.collection});
    this.showChildView('answers', answersView);
  }
  
});

module.exports = QuestionView;