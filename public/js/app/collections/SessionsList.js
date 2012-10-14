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
                return session.containsTag(searchTerm) ? true :
                       session.matchesTitle(searchTerm) ? true :
                       session.matchesSpeaker(searchTerm) ? true :
                       session.matchesTrack(searchTerm) ? true :
                       false
            })
        );
        return filteredSessionsList;
    },

    getBySpeakerId: function(id) {
        var filteredSessionsList = new TrondheimDC.Collections.SessionsList();
        filteredSessionsList.reset(
            this.filter(function(session) {
                return session.isPresentedBy(id);
            })
        );
        return filteredSessionsList;
    },

    getFavourited: function() {
        var currentFavourites, filteredSessionsList;
        currentFavourites = JSON.parse( localStorage.getItem(this.model.localStorageFavouritesKey) );
        filteredSessionsList = new TrondheimDC.Collections.SessionsList();
        filteredSessionsList.reset(
            this.filter(function(session) {
                return session.isFavourited();
            })
        );
        return filteredSessionsList;
    },
    
    getById: function(id) {
        for (var i = 0; i < this.length; i++) {
            if (this.models[i].get("id") == id) {
                return this.models[i];
            }
        }
    },
    
    groupedByTimeslot: function() {
        var groupedSessions = _.groupBy(this.models, function(session) {
            var startingHour = session.get("starts").getHours();
            switch (startingHour) {
                case 9:  return "09:00 - 10:00";
                case 10: return "10:00 - 11:00";
                case 11: return "11:00 - 12:00";
                case 12: return "12:00 - 13:00";
                case 13: return "13:00 - 14:00";
                case 14: return "14:00 - 15:00";
                case 15: return "15:00 - 16:00";
                case 16: return "16:00 - 17:00";
                case 17: return "17:00 - 18:00";
                case 18: return "18:00 - 19:00";
            }
        });
        
        return groupedSessions;
    }
    
});
