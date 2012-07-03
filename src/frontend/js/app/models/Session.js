if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Models === "undefined" || !TrondheimDC.Models) {
    TrondheimDC.Models = {};
}

TrondheimDC.Models.Session = Backbone.Model.extend({

    speaker: function(speakers) {
        for (var i = 0; i < speakers.length; i++) {
            if (speakers.models[i].get("id") == this.get("speakerId"))
                return speakers.models[i];
        }
    },

    matchesTitle: function(searchTerm) {
        return this.get("title").toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    },

    matchesSpeaker: function(searchTerm) {
    	return this.speaker.get("name").toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    },
    
    containsTag: function(tag) {
        var tags = this.get("tags");
        return _.indexOf(tags, tag) > -1;
    }
    
});
