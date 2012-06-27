define("app/collections/Talk",[
  "backbone",
  "app/models/Talk"
], 
function( Backbone, Talk ){
  var Talk = Backbone.Collection.extend({
    model: Talk
  })
  return Talk
})