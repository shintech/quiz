var AnswerView = Backbone.Marionette.View.extend({
  tagName: 'li',
  className: 'answer-view',
  template: require("../templates/answer-view-template.html"),
  events: {
    'click': 'handleClick'
  },
  handleClick: function(e){
    if(this.model.get('correct')){
      this.$el.css('background-color', 'lightgreen')      
    } else {
      this.$el.css('background-color', 'red')      
    }
  }
});

module.exports = AnswerView;