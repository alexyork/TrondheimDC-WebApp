define("app/collections/Talks",[
  "backbone",
  "app/models/Talk"
], 
function( Backbone, Talk ){
  var Talks = Backbone.Collection.extend({
    model: Talk,
    localStorage: new Backbone.LocalStorage("talks"),
    search: function( value ) {
      var talks
      talks = new Talks()
      talks.reset(this.filter(function( talk ) {
        var tagmatch
        tagmatch = false
        if( talk.get("title").match(new RegExp(value, "gi")) )
          return true
        if( talk.get("speaker").match(new RegExp(value, "gi")) )
          return true
        _.each(talk.get("tags"), function( tag ) {
          if( tag.match(new RegExp(value, "gi")) )
            tagmatch = true
        })
        return tagmatch
      }))
      return talks
    }
  })
  return Talks
})