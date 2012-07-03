describe("SessionsList", function() {
    
    describe("search", function() {
        
        it("should find sessions with matching tags", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { title: "Jasmine is awesome", tags: [ "tdd", "unit-testing" ] },
                { title: "JavaScript is awesome", tags: [ "javascript" ] }
            ]);
            
            var searchResults = sessionsList.search("tdd");
            
            expect(searchResults.length).toEqual(1);
            expect(searchResults.models[0].get("title")).toEqual("Jasmine is awesome");
        });
        
        it("should find sessions with matching titles", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { title: "Jasmine is awesome", tags: [ "tdd", "unit-testing" ] },
                { title: "JavaScript is awesome", tags: [ "javascript" ] }
            ]);
            
            var searchResults = sessionsList.search("Jasmine");
            
            expect(searchResults.length).toEqual(1);
            expect(searchResults.models[0].get("title")).toEqual("Jasmine is awesome");
        });
    });

    describe("getBySpeakerId", function() {
        
        it("should return the correct speaker based on the speaker id", function() {
            var sessionsList = new TrondheimDC.Collections.SessionsList();
            sessionsList.reset([
                { title: "TDDing is smart", speakers: [{ id: 37, name: "Pauline" }] },
                { title: "Backbone kicks ass", speakers: [{ id: 43, name: "Alex" }, { id: 84, name: "Andre" }] }
            ]);

            var searchResults = sessionsList.getBySpeakerId(37);

            expect(searchResults.length).toEqual(1);
            expect(searchResults.models[0].get("speakers")[0].name).toEqual("Pauline");
        });
        
    })
    
});
