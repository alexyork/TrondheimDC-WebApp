if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Collections === "undefined" || !TrondheimDC.Collections) {
    TrondheimDC.Collections = {};
}

TrondheimDC.Collections.SessionsList = Backbone.Collection.extend({
    
    model: TrondheimDC.Models.Session,
    
    search: function(searchTerm) {
        var filteredSessionsList = new TrondheimDC.Collections.SessionsList();
        filteredSessionsList.reset(
            this.filter(function(session) {
                var matchesTag = session.containsTag(searchTerm);
                var matchesTitle = session.matchesTitle(searchTerm);
                return matchesTag || matchesTitle; 
            })
        );
        return filteredSessionsList;
    },

    setUpSpeakers: function(speakers) {
        for (var i = 0; i < this.length; i++) {
            this.models[i].speaker = speakers.getById(this.models[i].get("speakerId"));
        }
    }
    
});
