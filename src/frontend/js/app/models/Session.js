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
<<<<<<< HEAD
        var speakers = this.get("speakers");
        for (var i = 0; i < speakers.length; i++) {
            if (speakers[i].id == speakerId)
=======
        for (var i = 0; i < this.get("speakers").length; i++) {
            if (this.get("speakers")[i].id == speakerId)
>>>>>>> Listing out all sessions by a speaker in the detail view
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
