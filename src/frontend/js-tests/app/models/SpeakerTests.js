describe("Speaker", function() {
    
    describe("matchesName", function() {
    
        it("should match search terms if it is found in the speaker name", function() {
            var speaker = new TrondheimDC.Models.Speaker({ name: "Joe Bloggs" });
            
            var result = speaker.matchesName("Joe");
            
            expect(result).toEqual(true);
        });
        
        it("should not match search terms if it is not found in the speaker name", function() {
            var speaker = new TrondheimDC.Models.Speaker({ name: "Joe Bloggs" });
            
            var result = speaker.matchesName("Doe");
            
            expect(result).toEqual(false);
        });
        
        it("should match search terms regardless of casing", function() {
            var speaker = new TrondheimDC.Models.Speaker({ name: "Joe Bloggs" });
            
            var result = speaker.matchesName("bLOggS");
            
            expect(result).toEqual(true);
        });
    
    });
    
});
