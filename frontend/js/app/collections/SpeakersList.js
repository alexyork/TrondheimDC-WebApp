if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Collections === "undefined" || !TrondheimDC.Collections) {
    TrondheimDC.Collections = {};
}

TrondheimDC.Collections.SpeakersList = Backbone.Collection.extend({
    
    model: TrondheimDC.Models.Speaker,
    
	search: function(searchTerm) {
        var filteredSpeakersList = new TrondheimDC.Collections.SpeakersList();
        filteredSpeakersList.reset(
            this.filter(function(speaker) {
                return speaker.matchesName(searchTerm);
            })
        );
        return filteredSpeakersList;
    },

    getById: function(id) {
        for (var i = 0; i < this.length; i++) {
        	if (this.models[i].get("id") == id) {
        		return this.models[i];
            }
        }
    },

    getByIds: function(ids) {
        
        var filteredSpeakersList = new TrondheimDC.Collections.SpeakersList();
        filteredSpeakersList.reset(
            this.filter(function(speaker) {
                if (!speaker) return false;
                var speakerId = parseFloat(speaker.get("id"))
                return ids.indexOf( speakerId ) > -1;
            })
        );
        return filteredSpeakersList;
    }
    
});
