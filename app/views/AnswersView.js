var AnswerView = require("./AnswerView");

var AnswersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'answers-view',
  childView: AnswerView,

});

module.exports = AnswersView;