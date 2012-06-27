define("app/views/Talk",[
  "backbone"
], 
function( Backbone ){

  var Talk = Backbone.View.extend({
    tagName: 'li',
    className: 'talk',
    events: {
      "click .tag": "filterByTag"
    },
    template: _.template( $('#talk-template').html() ),
    render: function() {
      var hmtl
      html = this.template( this.model.toJSON() )
      this.$el.html( html )
      return this
    },
    filterByTag: function( event ) {
      var tag
      tag = $(event.currentTarget).text()
      window.app.trigger("filter:tag", tag)
    }
  })

  return Talk
})