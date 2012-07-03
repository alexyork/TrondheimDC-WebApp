describe("SpeakersList", function() {
    
    describe("getById", function() {
        it("should find speaker with matching id", function() {
            var speakersList = new TrondheimDC.Collections.SpeakersList();
            speakersList.reset([
                { id: 1, name: "Paulini" }
            ]);
            
            var result = speakersList.getById(1);
            
            expect(result.get("name")).toEqual("Paulini");
        });
    });
    
});
