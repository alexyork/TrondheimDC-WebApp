describe("Speaker", function() {
    
    describe("matchesName", function() {
    
        it("should match search terms if it is found in the speaker name", function() {
            var speaker = new TrondheimDC.Models.Speaker({
                name: "Gøran"
            });
            
            var result = speaker.matchesName("gøran");
            
            expect(result).toEqual(true);
        });
        
        it("should not match search terms if it is not found in the speaker name", function() {
            var speaker = new TrondheimDC.Models.Speaker({
                name: "Alex"
            });
            
            var result = speaker.matchesName("foobar");
            
            expect(result).toEqual(false);
        });
    
    });
    
});
