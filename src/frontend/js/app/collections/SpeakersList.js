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
        /*
        var speakers = [];
        _.each(json.speakerIds, function(speakerId, index) {
            var speaker = app.speakersList.getById(speakerId).toJSON();
            speakers.push(speaker);
        });
        json.speakers = speakers;
        console.log(json.speakers);
        */
        
        var filteredSpeakersList = new TrondheimDC.Collections.SpeakersList();
        filteredSpeakersList.reset(
            this.filter(function(speaker) {
                if (!speaker) return false;
                return ids.indexOf( speaker.get("id") ) > -1;
            })
        );
        return filteredSpeakersList;
    }
    
});
