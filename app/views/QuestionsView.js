var QuestionView = require("./QuestionView");

var QuestionsView = Backbone.Marionette.CollectionView.extend({
  tagName: 'div',
  childView: QuestionView,
  onRender: function(){
    console.log(this.collection.models)
  }
});

module.exports = QuestionsView;