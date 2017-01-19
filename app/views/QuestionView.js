var QuestionView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require("../templates/question-view-template.html")
});

module.exports = QuestionView;