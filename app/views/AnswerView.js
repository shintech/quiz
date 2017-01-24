var AnswerView = Backbone.Marionette.View.extend({
  tagName: 'li',
  className: 'answer-view',
  template: require("../templates/answer-view-template.html"),
  attributes: function(){
    return {
      "data-correct": this.model.get('correct')
    }
  },
  events: {
    'click': 'handleClick'
  },
  handleClick: function(e){
    console.log($(e.currentTarget).data('correct'))
    if( $(e.currentTarget).data('correct')){
      this.$el.css('background-color', 'lightgreen')
    } else {
      this.$el.css('background-color', 'red')
    }
  }
});

module.exports = AnswerView;