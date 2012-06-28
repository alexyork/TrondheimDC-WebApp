describe("TrondheimDC.Speakers", function() {

    it("should get all talks", function() {
        // Arrange
        setupTalks([
            { speaker: "Alex York", title: "JavaScript rocks" },
            { speaker: "Andre Tangen", title: "HTML5 rocks" }
        ]);
        
        // Act
        var talks = TrondheimDC.Talks.getAll();
        
        // Assert
        expect(talks.length).toEqual(2);
    });
    
    function setupTalks(talks) {
        window.bootstrapData = { talks: talks };
    }
    
});