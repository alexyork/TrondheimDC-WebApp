describe("TrondheimDC.Templating", function() {

	it("should render a simple template", function() {
		// Arrange
		jasmine.getFixtures().set(
			"<div id='results'></div>" + 
			"<script id='template' type='text/html'>" + 
				"<p><%= name %></p>" +
			"</script>");
		
		// Act
		TrondheimDC.Templating.render({
			template: "template",
			data: { name: "Alex York" },
			results: "results"
		});
		
		// Assert
		expect($("#results p").text()).toEqual("Alex York");
	});
	
});