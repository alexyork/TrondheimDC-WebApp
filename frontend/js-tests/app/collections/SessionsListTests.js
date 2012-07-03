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
                { title: "TDDing is smart" }
            ]);

            sessionsList.models[0].speakers = [{ id: 1, name: "Paulini" }, { id: 2, name: "Alex" }]

            var searchResults = sessionsList.getBySpeakerId(1);

            expect(searchResults.length).toEqual(1);
            expect(searchResults.models[0].speakers[0].name).toEqual("Paulini");
        })
    })
    
});
