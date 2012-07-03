(function() {
    
    //Core pub sub message handler for cross module messaging.
    window.app = Object.create(Backbone.Events);
    
    app.view = new TrondheimDC.Views.AppView()

    app.router = new TrondheimDC.Routers.AppRouter({
      delegateView: app.view
    })

    // Get the sessions data into a list
    app.sessionsList = new TrondheimDC.Collections.SessionsList();
    app.sessionsList.reset(
        TrondheimDC.getAllSessions()
    );

    app.speakersList = new TrondheimDC.Collections.SpeakersList();
    app.speakersList.reset(
        TrondheimDC.getAllSpeakers()
    );

    app.sessionsList.setUpSpeakers(app.speakersList);

    app.router.route('sessions', 'sessions', function() {
        // Render the list into a view, and add to the DOM
        var sessionsListView = new TrondheimDC.Views.SessionsListView({ collection: app.sessionsList });
        sessionsListView.render();
        app.view.setContentView(sessionsListView)
    })

    app.router.route('sessions/:id', 'sessions', function(id) {
        var sessionsListView = new TrondheimDC.Views.SessionsListView({ collection: app.sessionsList });
        sessionsListView.render();
        app.view.setContentView(sessionsListView)
        sessionsListView.toggleSessionDetailsBySessionId(id)
    })

    app.router.route('speakers', 'speakers', function() {
        //!TODO: render speaksers
        app.view.setContentView(/* speakers */)
    })

    app.router.route('favourites', 'favourites', function() {
        //!TODO: render favourites
        app.view.setContentView( /* favourites */)
    })

    app.router.route('tweets', 'tweets', function() {
        //!TODO: render tweets
        app.view.setContentView( /* tweets */)
    })

    Backbone.history.start()

})();
