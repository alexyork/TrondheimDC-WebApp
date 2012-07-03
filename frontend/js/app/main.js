(function() {
    
    window.app = Object.create(Backbone.Events);
    
    var appView = new TrondheimDC.Views.AppView()

    var router = new TrondheimDC.Routers.AppRouter({
      delegateView: appView
    })

    router.route('sessions', 'sessions', function() {
        // Get the sessions data into a list
        var sessionsList = new TrondheimDC.Collections.SessionsList();
        var sessionData = TrondheimDC.getAllSessions();
        sessionsList.reset(sessionData);

        var speakersList = new TrondheimDC.Collections.SpeakersList();
        var speakersData = TrondheimDC.getAllSpeakers();
        speakersList.reset(speakersData);

        sessionsList.setUpSpeakers(speakersList);
        
        // Render the list into a view, and add to the DOM
        var sessionsListView = new TrondheimDC.Views.SessionsListView({ collection: sessionsList });
        sessionsListView.render();
        appView.setContentView(sessionsListView)
    })

    router.route('speakers', 'speakers', function() {
        //!TODO: render speaksers
        appView.setContentView(/* speakers */)
    })

    router.route('favourites', 'favourites', function() {
        //!TODO: render favourites
        appView.setContentView( /* favourites */)
    })

    router.route('tweets', 'tweets', function() {
        //!TODO: render tweets
        appView.setContentView( /* tweets */)
    })

    Backbone.history.start()

})();
