describe("Templating", function() {

	beforeEach(function() {
		// Setup
	});

	it("should render a simple template", function() {
		console.log(jasmine);
		jasmine.getFixtures().set(
			"<div id='results'></div>" + 
			"<script id='template' type='text/html'>" + 
				"<p><%= name %></p>" +
			"</script>");
		
		TrondheimDC.Templating.render({
			template: "template",
			data: { name: "Alex York" },
			results: "results"
		});
		
		expect($("#results p").text()).toEqual("Alex York");
	});
	
});