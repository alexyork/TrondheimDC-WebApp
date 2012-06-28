describe("TrondheimDC.Speakers", function() {

    it("should get all speakers", function() {
        // Arrange
        window.bootstrapData = {
            talks: [
                { speaker: "Alex York", title: "JavaScript rocks" },
                { speaker: "Andre Tangen", title: "HTML5 rocks" }
            ]
        }
        
        // Act
        var speakers = TrondheimDC.Speakers.getAll();
        
        // Assert
        expect(speakers).toContain("Alex York");
        expect(speakers).toContain("Andre Tangen");
    });
    
    it("should not contain duplicate speakers", function() {
        // Arrange
        window.bootstrapData = {
            talks: [
                { speaker: "Alex York", title: "JavaScript rocks" },
                { speaker: "Alex York", title: "CSS3 rocks" }
            ]
        }
        
        // Act
        var speakers = TrondheimDC.Speakers.getAll();
        
        // Assert
        expect(speakers.length).toEqual(1);
        expect(speakers).toContain("Alex York");
    });
    
});