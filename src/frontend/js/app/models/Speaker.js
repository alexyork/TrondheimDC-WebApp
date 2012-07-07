if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Models === "undefined" || !TrondheimDC.Models) {
    TrondheimDC.Models = {};
}

TrondheimDC.Models.Speaker = Backbone.Model.extend({

    matchesName: function(searchTerm) {
        return this.get("name").toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    }
    
});
