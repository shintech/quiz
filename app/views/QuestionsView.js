var QuestionView = require("./QuestionView");

var QuestionsView = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'questions-view',
  childView: QuestionView,
  initialize: function(){
    this.collection.fetch();
  },
});

module.exports = QuestionsView;