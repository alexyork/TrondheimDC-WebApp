define("app/views/TalksList",[
  "backbone",
  "app/views/Talk",
  "app/collections/Talk"
], 
function( Backbone, TalkView, TalkCollection ){

  var TalksList = Backbone.View.extend({
    id: "talks-list",
    events: {
      "click .search": "search",
      "click .reset": "reset",
      "keydown .searchbar input": "searchinput",
      "click h2": "talkerclicked"
    },
    template: _.template( $('#talks-list-template').html() ),
    initialize: function() {
      window.app.on("filter:tag", this.search, this)
    },
    talkerclicked: function(e) {
      var name = e.target.innerHTML;
      var talks = this.filtertalks(name);
      talks.first().lol();
    },
    render: function( collection ) {
      var html, collection
      collection = collection || this.collection
      html = this.template( this.model )
      this.$el.empty()
      this.$el.html( html )
      collection.each(function( talk ) {
        var talkView
        talkView = new TalkView({
          model: talk
        })
        talkView.render()
        this.$el.find( "ul.talks" ).append( talkView.el )
      }, this)
      return this
    },
    searchinput: function( event ) {
      if( event.keyCode === 13 )
        this.search()
    },
    search: function( value ) {
      var value, talks
      value = value || this.$el.find('.searchbar input').val()
      talks = this.filtertalks(value);
      this.render( talks )
    },
    filtertalks: function(value) {
      var talks = new TalkCollection()
      talks.reset(this.collection.filter(function( talk ) {
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
      }));
      return talks;
    },
    reset: function() {
      this.render()
    }
  })

  return TalksList
})