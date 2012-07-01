(function() {
	
    if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
        TrondheimDC = {};
    }
	
    TrondheimDC.Talks = {

        getAll: function() {
            var talks = window.bootstrapData.talks;
            
            return Enumerable.From(talks)
                             .OrderBy(function(talk) { return talk.title; })
                             .ToArray();
        }
		
    };
	
})();
