define("app/collections/Talks",[
  "backbone",
  "app/models/Talk"
], 
function( Backbone, Talk ){
  var Talks = Backbone.Collection.extend({
    model: Talk,
    localStorage: new Backbone.LocalStorage("talks"),
    search: function( value ) {
      var talks, test
      talks = new Talks()
      test = new RegExp(value, "gi")
      talks.reset(this.filter(function( talk ) {
        var tagmatch
        tagmatch = false
        if( talk.get("title").match(test) )
          return true
        if( talk.get("speaker").match(test) )
          return true
        _.each(talk.get("tags"), function( tag ) {
          if( tag.match(test) )
            tagmatch = true
        })
        return tagmatch
      }))
      return talks
    }
  })
  return Talks
})