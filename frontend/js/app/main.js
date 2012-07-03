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
        TrondheimDC.sessionsBootstrapData
    );

    app.speakersList = new TrondheimDC.Collections.SpeakersList();
    app.speakersList.reset(
        TrondheimDC.speakersBootstrapData
    );

    app.sessionsList.setUpSpeakers(app.speakersList);

    app.router.route('sessions', 'sessions', function() {
        // Render the list into a view, and add to the DOM
        var sessionsListView = new TrondheimDC.Views.SessionsListView({ collection: app.sessionsList });
        sessionsListView.render();
        app.view.setContentView(sessionsListView);
    });

    app.router.route('sessions/:id', 'sessions', function(id) {
        var sessionsListView = new TrondheimDC.Views.SessionsListView({ collection: app.sessionsList });
        sessionsListView.render();
        app.view.setContentView(sessionsListView);
        sessionsListView.toggleOpenSessionBySessionId(id, 0);
    });

    app.router.route('speakers', 'speakers', function() {
        //!TODO: render speaksers
        var speakersListView = new TrondheimDC.Views.SpeakersListView({ collection: app.speakersList });
        speakersListView.render();
        app.view.setContentView(speakersListView);
    });

    app.router.route('speakers/:id', 'speakers', function(id) {
        var speakerView = new TrondheimDC.Views.SpeakerDetailView({ collection: app.speakersList.getById(id) });
        speakerView.render();
        app.view.setContentView(speakerView);
    });

    app.router.route('favourites', 'favourites', function() {
        //!TODO: render favourites
        app.view.setContentView( /* favourites */);
    });

    app.router.route('tweets', 'tweets', function() {
        //!TODO: render tweets
        app.view.setContentView( /* tweets */);
    });

    Backbone.history.start();

})();
