if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Models === "undefined" || !TrondheimDC.Models) {
    TrondheimDC.Models = {};
}

TrondheimDC.Models.Session = Backbone.Model.extend({

    matchesTitle: function(searchTerm) {
        return this.get("title").toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    },

    matchesSpeaker: function(searchTerm) {
    	return this.speaker.get("name").toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    },

    isPresentedBy: function(speakerId) {
        var speakers = this.get("speakers");
        for (var i = 0; i < speakers.length; i++) {
            if (speakers[i].id == speakerId)
                return true;
        }
        return false;
    },
    
    containsTag: function(tag) {
        var tags = this.get("tags");
        var matchFound = false;
        _.each(tags, function(t) {
            if (tag.toLowerCase().indexOf(t) > -1) {
                matchFound = true;
            }
        })
        return matchFound;
    }
    
});
