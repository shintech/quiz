var QuestionView = Backbone.Marionette.View.extend({
  tagName: 'li',
  template: require("../templates/question-view-template.html")
});

module.exports = QuestionView;