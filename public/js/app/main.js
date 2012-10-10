(function() {
    
    //
    // Startup
    //
    setupApp();

    setupSpeakersList();
    setupSessionsList();
    
    setupRoutes();
    beginListeningForCustomEvents();
    
    
    //
    // Helpers
    //
    function setupApp() {
        // Core pub sub message handler for cross module messaging
        window.app = Object.create( Backbone.Events );
        
        app.view = new TrondheimDC.Views.AppView()
    
        app.router = new TrondheimDC.Routers.AppRouter({
            delegateView: app.view
        });
    }
    
    function setupSpeakersList() {
        app.speakersList = new TrondheimDC.Collections.SpeakersList();
        app.speakersList.reset( TrondheimDC.Data.speakers );
    }
    
    function setupSessionsList() {
        // Attach minimal speaker info to each session
        for ( var i = 0; i < TrondheimDC.Data.sessions.length; i++ ) {
            var session = TrondheimDC.Data.sessions[i];
            var speakers = [];
            for ( var j = 0; j < session.speakerIds.length; j++ ) {
                var speaker = app.speakersList.getById( session.speakerIds[j] );
                speakers.push({ 
                    id: speaker.get("id"), 
                    name: speaker.get("name") 
                });
            }
            session.speakers = speakers;
        }
        
        app.sessionsList = new TrondheimDC.Collections.SessionsList();
        app.sessionsList.reset( TrondheimDC.Data.sessions );
    }
    
    function setupRoutes() {
        app.router.route('sessions', 'sessions', function() {
            var timeslotsListView = new TrondheimDC.Views.SessionsByTimeslotListView({ collection: app.sessionsList.groupByTimeslot() });
            timeslotsListView.render();
            app.view.setContentView( 'sessions', timeslotsListView );
        });
       
        app.router.route('sessions/:id', 'sessions', function(id) {
            var sessionDetailView = new TrondheimDC.Views.SessionDetailView({ collection: app.sessionsList.getById(id) });
            sessionDetailView.render();
            app.view.setContentView( 'sessions', sessionDetailView );
        });
    
        app.router.route('speakers', 'speakers', function() {
            var speakersListView = new TrondheimDC.Views.SpeakersListView({ collection: app.speakersList });
            speakersListView.render();
            app.view.setContentView( 'speakers', speakersListView );
        });
    
        app.router.route('speakers/:id', 'speakers', function(id) {
            var speakerView = new TrondheimDC.Views.SpeakerDetailView({ collection: app.speakersList.getById(id) });
            speakerView.render();
            app.view.setContentView( 'speakers', speakerView );
        });
    
        app.router.route('favourites', 'favourites', function() {
            var sessionsListView = new TrondheimDC.Views.FavouritesListView({ collection: app.sessionsList.getFavourited() });
            sessionsListView.render();
            app.view.setContentView( 'favourites', sessionsListView );
        });
    
        app.router.route('tweets', 'tweets', function() {
            var twitterView = new TrondheimDC.Views.TwitterListView();
            twitterView.initialize();
            app.view.setContentView( 'tweets', twitterView );
        });
        
        Backbone.history.start();
    }
    
    function beginListeningForCustomEvents() {
        
        window.app.on('ga:trackEvent', function(trackingData) {
            _gaq.push(['_trackEvent', trackingData.category, trackingData.action, trackingData.label, trackingData.value]);
        });

    }

})();
