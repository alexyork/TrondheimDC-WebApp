define("app/models/Talk",[
  "backbone"
], 
function( Backbone ){
  var Talk = Backbone.Model.extend({
    lol: function() {
      console.log(this.get("speaker") + " loled")
    }
  })
  return Talk
})