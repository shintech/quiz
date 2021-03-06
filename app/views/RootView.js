var RootView = Backbone.Marionette.View.extend({
  tagName: 'container-fluid',
  template: require("../templates/root-view-template.html"),
  regions: {
    header: {
      el: "#header-view"
    },
    main: {
      el: "#main-view",
      replaceElement: true
    },
  },
  initialize: function(){
    this.render();
  },
});

module.exports = RootView;