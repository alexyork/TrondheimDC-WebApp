describe("SpeakersList", function() {
    
    describe("getById", function() {
        
        it("should find speaker with matching id", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { title: "Jasmine is awesome", tags: [ "tdd", "unit-testing" ] },
                { title: "JavaScript is awesome", tags: [ "javascript" ] }
            ]);

            var speakersList = new TrondheimDC.Collections.SpeakersList();
            speakersList.reset([
                { id: 1, name: "Paulini" }
            ]);
            
            var result = speakersList.getById(1);
            
            expect(result.get("name")).toEqual("Paulini");
        });
    });
    
});
