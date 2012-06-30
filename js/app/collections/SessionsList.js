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
                var matchFound;
                session.containsTag();
                _.each(session.get("tags"), function(tag) {
                    if (tag === searchTerm) {
                        matchFound = true;
                    }
                });
                return matchFound;
            })
        );
        return filteredSessionsList;
    }
    
});
