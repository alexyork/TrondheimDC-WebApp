(function() {
	
    if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
        TrondheimDC = {};
    }
	
    TrondheimDC.Templating = {

        render: function(options) {
            var results = document.getElementById(options.results);
            results.innerHTML = tmpl(options.template, options.data);
        }
		
    };
	
})();
