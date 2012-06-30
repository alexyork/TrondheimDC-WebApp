(function() {
    
    window.app = Object.create(Backbone.Events);
    
    // Get the sessions data into a list
    var sessionsList = new TrondheimDC.Collections.SessionsList();
    var sessionData = TrondheimDC.getAllSessions();
    sessionsList.reset(sessionData);
    
    // Render the list into a view, and add to the DOM
    var sessionsListView = new TrondheimDC.Views.SessionsListView({ collection: sessionsList });
    sessionsListView.render();
    $('#app-content').append(sessionsListView.el);

})();
