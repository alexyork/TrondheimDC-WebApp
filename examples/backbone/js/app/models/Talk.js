define("app/models/Talk",[
  "backbone"
], 
function( Backbone ){
  var Talk = Backbone.Model.extend({
    initialize: function() {
      this.on("change", this.save, this)
    }
  })
  return Talk
})