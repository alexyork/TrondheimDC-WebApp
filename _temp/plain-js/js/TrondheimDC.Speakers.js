(function() {
	
    if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
        TrondheimDC = {};
    }
	
    TrondheimDC.Speakers = {

        getAll: function() {
            var talks = window.bootstrapData.talks;
            
            // Use linq.js to filter
            return Enumerable.From(talks)
                             .Select(function(talk) { return talk.speaker; })
                             .Distinct()
                             .ToArray();
        }
		
    };
	
})();
