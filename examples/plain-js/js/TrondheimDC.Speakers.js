(function() {
	
    if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
        TrondheimDC = {};
    }
	
    TrondheimDC.Speakers = {

        getAll: function() {
            var talks = window.bootstrapData.talks;
            var speakers = [];
            for (var i = 0; i < talks.length; i++) {
                speakers.push(talks[i].speaker);
            }
            return speakers;
        }
		
    };
	
})();
