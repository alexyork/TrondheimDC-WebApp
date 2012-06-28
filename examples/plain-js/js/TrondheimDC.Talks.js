(function() {
	
    if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
        TrondheimDC = {};
    }
	
    TrondheimDC.Talks = {

        getAll: function() {
            var talks = window.bootstrapData.talks;
            return talks;
        }
		
    };
	
})();
