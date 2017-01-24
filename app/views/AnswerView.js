var AnswerView = Backbone.Marionette.View.extend({
  tagName: 'li',
  className: 'answer-view',
  template: require("../templates/answer-view-template.html")
});

module.exports = AnswerView;