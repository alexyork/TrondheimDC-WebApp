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
    
    groupedByTimeslot: function(timeslots) {
        // Clone the timeslots
        var groupedSessions = [];
        _.each(timeslots, function(timeslot) {
            var group = _.extend({ sessions: [], title: "" }, timeslot);
            groupedSessions.push(group);
        });
        
        // Add the sessions to the correct timeslot
        _.each(this.models, function(session) {
            var matchingTimeslot = _.find(groupedSessions, function(timeslot) {
                var sessionJson = session.toJSON();
                if (sessionJson.starts >= timeslot.starts && sessionJson.ends <= timeslot.ends) {
                    return timeslot;
                }
            });
            if (matchingTimeslot) {
                matchingTimeslot.sessions.push(session);
            }
        });
        
        return groupedSessions;
        
        /*
        var _models = this.models;
        
        var filterByStartHour = function(startingHour) {
            return _.filter(_models, function(session) {
                return startingHour === session.get("starts").getHours();
            });
        };
        
        return {
            "09:00 - 10:00": filterByStartHour(9),
            "10:00 - 11:00": filterByStartHour(10),
            "11:00 - 12:00": filterByStartHour(11),
            "12:00 - 13:00": filterByStartHour(12),
            "13:00 - 14:00": filterByStartHour(13),
            "14:00 - 15:00": filterByStartHour(14),
            "15:00 - 16:00": filterByStartHour(15),
            "16:00 - 17:00": filterByStartHour(16),
            "17:00 - 18:00": filterByStartHour(17),
            "18:00 - 19:00": filterByStartHour(18)
        };
        */
    }
    
});
