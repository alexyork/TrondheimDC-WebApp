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
            if (this.models[i].get("id") == id)
                return this.models[i];
        }
    }
    
});
