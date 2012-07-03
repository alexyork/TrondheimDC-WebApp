if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Collections === "undefined" || !TrondheimDC.Collections) {
    TrondheimDC.Collections = {};
}

TrondheimDC.Collections.SpeakersList = Backbone.Collection.extend({
    
    model: TrondheimDC.Models.Speaker,
    
    getById: function(id) {
        for (var i = 0; i < this.length; i++) {
        	if (this.models[i].get("id") == id)
        		return this.models[i];
        }
    }
    
});
