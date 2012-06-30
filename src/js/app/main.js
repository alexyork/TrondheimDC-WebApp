var sessions = new SessionsList();
sessions.reset([
    {
        title: "Maybe Backbone.js rocks, afterall...",
        speaker: "Alex York",
        tags: [ "backbone", "javascript", "lolcats" ]
    },
    {
        title: "See! I told you Backbone.js rocks!",
        speaker: "Andre Tangen",
        tags: [ "backbone", "javascript", "bill-murray" ]
    }
]);

var sessionsListView = new SessionsListView({ collection: sessions });
sessionsListView.render();
$('#app').append(sessionsListView.el);
