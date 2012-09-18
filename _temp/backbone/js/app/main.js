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
  "app/collections/Talks"
],
function( Backbone, TalksListView, TalksCollection ) {
  var talksListView, talks

  window.app = Object.create(Backbone.Events)
  
  //create a new talks collection
  talks = new TalksCollection()
  
  if( !window.localStorage.getItem("talks") ) {
    //save bootstrapdata to localstorage
    talks.reset(window.bootstrapData.talks) 
    talks.each(function( talk ) {
      talk.save()
    })
  } else {
    //fetch from localstorage
    talks.fetch()
  }
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