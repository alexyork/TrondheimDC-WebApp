define("app/views/Talk",[
  "backbone"
], 
function( Backbone ){

  var Talk = Backbone.View.extend({
    tagName: 'li',
    className: 'talk',
    events: {
      "click .tag": "filterByTag",
      "change input[type='checkbox']": "checked"
    },
    template: _.template( $('#talk-template').html() ),
    initialize: function() {
      this.model.on("change:going", this.changedStatus, this)
    },
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
    },
    checked: function( event ) {
      var checkBox, isChecked
      checkBox = this.$el.find("input[type='checkbox']")
      isChecked = checkBox.attr("checked") ? true : false
      this.model.set("going", isChecked)
    },
    changedStatus: function( talk, isGoing ) {
      this.render()
    }
  })

  return Talk
})