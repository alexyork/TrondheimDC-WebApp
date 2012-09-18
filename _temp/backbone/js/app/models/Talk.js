define("app/models/Talk",[
  "backbone"
], 
function( Backbone ){
  var Talk = Backbone.Model.extend({
    initialize: function() {
      this.on("change", this.save, this)
    },
    lol: function() {
      console.log( this.get("speaker") + " loled");
    }
  })
  return Talk
})