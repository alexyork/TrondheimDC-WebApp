if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Collections === "undefined" || !TrondheimDC.Collections) {
    TrondheimDC.Collections = {};
}

TrondheimDC.Collections.SpeakersList = Backbone.Collection.extend({
    
    model: TrondheimDC.Models.Speaker
    /*
    search: function(searchTerm) {
        var filteredSpeakersList = new TrondheimDC.Collections.SpeakersList();
        
        return filteredSpeakersList;
    }
    */
});
