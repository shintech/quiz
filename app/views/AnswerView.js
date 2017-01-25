var AnswerView = Backbone.Marionette.View.extend({
  tagName: 'li',
  className: 'answer-view',
  template: require("../templates/answer-view-template.html"),
  initialize: function(){
    if(this.model.get('_question')){
      this.questionId = this.model.get('_question')._id;
    }
    this.listenTo(Backbone, 'submit:answer', this.handleClick)
  },
  serializeData: function(){
    return {
      "_id": this.model.get('_id'),
      "content": this.model.get('content'),
      "correct": this.model.get('correct'),
      "_question": this.model.get('_question'),
      "questionId": this.questionId
    };
  },  
  handleClick: function(){
    if($('[name=' + this.questionId + '-radio]:radio:checked').val() == this.model.get('_id') && this.model.get('correct')){
      this.$el.css('background-color', 'lightgreen');  
    } else if ($('[name=' + this.questionId + '-radio]:radio:checked').val() == this.model.get('_id') && !this.model.get('correct')){
      this.$el.css('background-color', 'red');  
    }
  }
});

module.exports = AnswerView;