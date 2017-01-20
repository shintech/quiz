var QuestionView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require("../templates/question-view-template.html"),
  events: {
    'click .answer': 'clickAnswer'
  },
  initialize: function(){
    console.log("questionView initialize")
    console.log(this.model.attributes)
  },
  attributes: function(){
    if (this.model.get('correct')){
      return {
        "data-id": this.model.get('correct')
      }
    }
  },
  clickAnswer: function(e){
    console.log($(e.currentTargetcorrect).data('correct'))
  }
});

module.exports = QuestionView;