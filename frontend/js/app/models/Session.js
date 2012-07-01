if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Models === "undefined" || !TrondheimDC.Models) {
    TrondheimDC.Models = {};
}

TrondheimDC.Models.Session = Backbone.Model.extend({
    
    matchesTitle: function(searchTerm) {
        return this.get("title").indexOf(searchTerm) > -1;
    },
    
    containsTag: function(tag) {
        var tags = this.get("tags");
        return _.indexOf(tags, tag) > -1;
    }
    
});
