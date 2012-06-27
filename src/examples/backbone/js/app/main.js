require.config({
  baseUrl: './js',
  shim: {
    "backbone": {
      deps: ["underscore", "vendor/jquery"],
      exports: "Backbone"
    },
    "underscore": {
      exports: "_"
    },
  },
  paths: {
    "backbone": "vendor/Backbone",
    "underscore": "vendor/underscore",
    "jquery": "vendor/jquery"
  }
})

require([
  "backbone",
  "app/views/TalksList",
  "app/collections/Talk"
],
function( Backbone, TalksListView, TalksCollection ) {
  var talksListView, talks

  window.app = Object.create(Backbone.Events)
  
  //create a new talks collection
  talks = new TalksCollection()
  //add the bootstraped data to the collection
  talks.reset(window.bootstrapData.talks)

  //create a new Talks listview
  talksListView = new TalksListView({
    collection: talks
  })
  
  $(document).ready(function() {
    //when the document is ready render the talksListView
    talksListView.render()
    //and append it to the body
    $('#app').append(talksListView.el)
  })

})