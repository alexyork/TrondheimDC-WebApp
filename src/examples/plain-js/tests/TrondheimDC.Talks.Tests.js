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
    
    it("should get talks in alphabetical order", function() {
        // Arrange
        setupTalks([
            { speaker: "Alex York", title: "JavaScript rocks" },
            { speaker: "Andre Tangen", title: "CSS3 rocks" },
            { speaker: "Pål Strøm", title: "HTML5 rocks" },
        ]);
        
        // Act
        var talks = TrondheimDC.Talks.getAll();
        
        // Assert
        expect(talks[0].title).toEqual("CSS3 rocks");
        expect(talks[1].title).toEqual("HTML5 rocks");
        expect(talks[2].title).toEqual("JavaScript rocks");
    });
    
    function setupTalks(talks) {
        window.bootstrapData = { talks: talks };
    }
    
});