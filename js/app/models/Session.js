if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Models === "undefined" || !TrondheimDC.Models) {
    TrondheimDC.Models = {};
}

TrondheimDC.Models.Session = Backbone.Model.extend({
    
    containsTag: function(tag) {
        var tags = this.get("tags");
        return _.indexOf(tags, tag) > -1;
    }
    
});
